import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderAtom from '../Atomic Structure/Atoms/HeaderAtom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchImageLibrary} from 'react-native-image-picker';
import TextAtom from '../Atomic Structure/Atoms/TextAtom';
import ButtonAtom from '../Atomic Structure/Atoms/ButtonAtom';
import appMngr from '../Managers/AppManager';
import {useNavigation} from '@react-navigation/native';
const ProductEditingScreen = ({route}) => {
  const item = route.params.item;
  const navigation = useNavigation();
  const [image, setImage] = useState(item.image);
  const [productName, setProductName] = useState(item.title);
  const [productPrice, setProductPrice] = useState(String(item.price));
  const [productDescription, setProductDescription] = useState(
    item.description,
  );
  const [proudctcategory, setProudctcategory] = useState(item.category);
  const handleUploadImage = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {uri: response.assets[0].uri};
        setImage(source.uri);
      }
    });
  };
  const isValidForm = () => {
    if (
      image !== item.image ||
      productName !== item.title ||
      productPrice !== item.price ||
      productDescription !== item.description ||
      proudctcategory !== item.category
    ) {
      return true;
    }
  };
  const handleSubmit = async () => {
    const isValid = isValidForm();
    if (isValid) {
      const data = {
        id: item.id,
        title: productName,
        price: productPrice,
        description: productDescription,
        category: proudctcategory,
        image: image,
      };
      const response = await appMngr.editProduct(data);
      console.log('response', response);
      if (response) {
        navigation.navigate('Home');
      }
    }
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
          <View style={styles.container}>
            <HeaderAtom showBackButton={true} content={'Edit Product'} />
            <TouchableOpacity
              style={styles.imagecontainer}
              onPress={handleUploadImage}>
              {image ? (
                <Image
                  source={{uri: image}}
                  style={styles.productImage}
                  resizeMode="contain"
                />
              ) : (
                <View
                  style={{
                    width: wp(70),
                    height: hp(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TextAtom
                    content={'Add Image'}
                    textstyle={{
                      fontSize: wp(5),
                      fontWeight: 'bold',
                    }}
                  />
                </View>
              )}
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Product Name"
                placeholderTextColor={'#000'}
                value={productName}
                onChangeText={text => setProductName(text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Enter Product Price in dollars"
                placeholderTextColor={'#000'}
                value={productPrice}
                onChangeText={text => setProductPrice(text)}
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Enter Product catagory"
                placeholderTextColor={'#000'}
                value={proudctcategory}
                onChangeText={text => setProudctcategory(text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Enter Product Description"
                placeholderTextColor={'#000'}
                value={productDescription}
                onChangeText={text => setProductDescription(text)}
                style={[
                  styles.input,
                  {height: hp(15), textAlignVertical: 'top'},
                ]}
                multiline={true}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={{alignItems: 'center'}}>
          <ButtonAtom
            text={'Submit'}
            buttonStyle={{
              backgroundColor: isValidForm() ? '#E6486F' : 'gray',
              paddingVertical: hp(1),
              marginBottom: hp(3),
              marginVertical: hp(3),
            }}
            disabled={!isValidForm()}
            handlePress={handleSubmit}
            textcss={{color: '#fff'}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductEditingScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF6F8',
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
  inputContainer: {
    flex: 1,
    gap: wp(5),
  },
  input: {
    width: wp(90),
    height: hp(5),
    backgroundColor: '#fff',
    shadowColor: '#000',
    paddingHorizontal: wp(3),
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 6,
    borderRadius: wp(5),
    color: '#000',
  },
});
