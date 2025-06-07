import React, {use, useCallback, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import TextAtom from '../Atomic Structure/Atoms/TextAtom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderAtom from '../Atomic Structure/Atoms/HeaderAtom';
import {useFocusEffect} from '@react-navigation/native';
import appMngr from '../Managers/AppManager';
import ProductCardButton from '../Atomic Structure/Molecule/ProductCardButton';
import ButtonAtom from '../Atomic Structure/Atoms/ButtonAtom';
import PopUpAtom from '../Atomic Structure/Atoms/PopUpAtom';
import {useNavigation} from '@react-navigation/native';
import LoadingAtom from '../Atomic Structure/Atoms/LoadingAtom';
import {useSelector, useDispatch} from 'react-redux';
import {setProductsData} from '../redux/Slices/productsDataSlice';
const HOME = () => {
  const dipatch = useDispatch();
  const navigation = useNavigation();
  const productsData = useSelector(state => state.productsData.products);
  const [products, setProducts] = React.useState([]);
  const [showDelteItem, setShowDeleteItem] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState('');
  const [isInLoadingState, setLoadingState] = useState(true);
  useEffect(() => {
    console.log('products', products);
  }, [products]);

  const getAllProducts = async () => {
    const products = await appMngr.getAllProducts();
    setProducts(products);
    setLoadingState(false);
    dipatch(setProductsData(products));
  };
  useFocusEffect(
    useCallback(() => {
      // if (!productsData.length) {
      getAllProducts();
      // } else {
      //   setLoadingState(false);
      // }
    }, []),
  );
  const deleteItem = async shouldDelete => {
    if (!shouldDelete) {
      setDeleteItemId('');
      setShowDeleteItem(false);
    } else {
      const reponse = await appMngr.deleteProductById(deleteItemId);
      if (reponse) {
        setDeleteItemId('');
        setShowDeleteItem(false);
        const modiffiedProducts = products.filter(
          item => item.id !== deleteItemId,
        );
        setProducts(modiffiedProducts);
        dipatch(setProductsData(products));
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <HeaderAtom content={'Available Products'} />
        <View style={{height: hp(80)}}>
          {products.length > 0 ? (
            <FlatList
              data={products}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <ProductCardButton
                  handlePress={() => {
                    navigation.navigate('ProductDetialScreen', {id: item.id});
                  }}
                  data={item}
                  handleEditProduct={() =>
                    navigation.navigate('ProductEditingScreen', {item})
                  }
                  handleDeleteItem={() => {
                    setShowDeleteItem(true);
                    setDeleteItemId(item.id);
                  }}
                />
              )}
            />
          ) : (
            !isInLoadingState && <TextAtom text={'No Products Found'} />
          )}
        </View>
        <ButtonAtom
          text={'Add Product'}
          buttonStyle={styles.button}
          textcss={styles.text}
          handlePress={() => navigation.navigate('ProductAddScreen')}
        />
      </View>
      {showDelteItem && <PopUpAtom handleDelteItem={deleteItem} />}
      {(showDelteItem || isInLoadingState) && (
        <TouchableWithoutFeedback
          onPress={() => {
            setShowDeleteItem(false);
            setDeleteItemId('');
          }}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      {isInLoadingState && <LoadingAtom />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF6F8',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    width: wp(30),
    alignItems: 'center',
    paddingVertical: hp(1.5),
    backgroundColor: '#E6486F',
    borderRadius: wp(2),
  },
  text: {
    fontSize: wp(4),
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
export default HOME;
