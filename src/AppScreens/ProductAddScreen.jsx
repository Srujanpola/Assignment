import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderAtom from '../Atomic Structure/Atoms/HeaderAtom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchImageLibrary} from 'react-native-image-picker';
import TextAtom from '../Atomic Structure/Atoms/TextAtom';
const ProductAddScreen = () => {
  const [image, setImage] = useState();

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
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <HeaderAtom showBackButton={true} content={'Add Product'} />
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
          <TextInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductAddScreen;

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
});
