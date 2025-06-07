import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import appMngr from '../Managers/AppManager';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderAtom from '../Atomic Structure/Atoms/HeaderAtom';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextAtom from '../Atomic Structure/Atoms/TextAtom';
import LoadingAtom from '../Atomic Structure/Atoms/LoadingAtom';
const ProductDetial = ({route}) => {
  const navigation = useNavigation();
  const {id} = route.params;
  const [productDetails, setProductDetails] = useState();
  const [isInLoadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const getProductDetail = async () => {
      const response = await appMngr.getProductDetail(id);
      setProductDetails(response);
      setLoadingState(false);
    };
    getProductDetail();
  }, [id]);

  useEffect(() => {
    console.log('productDetails', productDetails);
  }, [productDetails]);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={{flex: 1}}>
        {productDetails ? (
          <View style={styles.container}>
            <HeaderAtom
              showBackButton={true}
              content={productDetails?.title}
              handleBackPress={() => {
                navigation.goBack();
              }}
            />
            <View style={styles.imagecontainer}>
              <Image
                source={{uri: productDetails?.image}}
                style={styles.productImage}
                resizeMode="contain"
              />
            </View>
            {!isInLoadingState && (
              <View style={styles.infoContainer}>
                <TextAtom
                  content={`$ ${productDetails?.price}`}
                  textstyle={[
                    styles.text,
                    {fontSize: wp(7), fontWeight: 'bold'},
                  ]}
                />
                <TextAtom
                  content={productDetails?.category}
                  textstyle={[
                    styles.text,
                    {fontSize: wp(4), fontWeight: 'bold'},
                  ]}
                />
                <TextAtom
                  content={`Rating: ${productDetails?.rating.rate}/5`}
                  textstyle={[
                    styles.text,
                    {fontSize: wp(4), fontWeight: 'bold'},
                  ]}
                />
                <TextAtom
                  content={productDetails?.description}
                  textstyle={[
                    styles.text,
                    {fontSize: wp(3), fontWeight: 'bold'},
                  ]}
                />
              </View>
            )}
          </View>
        ) : (
          !isInLoadingState && (
            <TextAtom
              content={'Product Not Found'}
              textstyle={[styles.text, {fontSize: wp(7), fontWeight: 'bold'}]}
            />
          )
        )}
      </ScrollView>
      {isInLoadingState && (
        <TouchableWithoutFeedback>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      {isInLoadingState && <LoadingAtom />}
    </SafeAreaView>
  );
};

export default ProductDetial;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#FFF6F8',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent:'space-around',
    gap: wp(5),
  },
  imagecontainer: {
    width: wp(90),
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: hp(3),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 6,
    borderRadius: wp(5),
  },
  productImage: {
    width: wp(70),
    height: hp(30),
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: wp(5),
    gap: wp(1.5),
  },
  text: {
    color: '#000',
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
