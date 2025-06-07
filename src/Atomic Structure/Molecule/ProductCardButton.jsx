import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import TextAtom from '../Atoms/TextAtom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonAtom from '../Atoms/ButtonAtom';
import {TrashIcon} from 'react-native-heroicons/solid';
const ProductCardButton = ({data, handleDeleteItem, handlePress}) => {
  useEffect(() => {
    console.log('Data', data.rating);
  }, []);
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image
        source={{uri: data.image}}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <TextAtom
          content={data.title}
          textstyle={[styles.text, {fontSize: wp(4.5), fontWeight: 'bold'}]}
        />
        <TextAtom
          content={`$ ${data.price}`}
          textstyle={[styles.text, {fontSize: wp(3), fontWeight: 'bold'}]}
        />
        <TextAtom
          content={data.category}
          textstyle={[styles.text, {fontSize: wp(3), fontWeight: 'bold'}]}
        />
        <TextAtom
          content={`Rating: ${data.rating.rate}/5`}
          textstyle={[styles.text, {fontSize: wp(3), fontWeight: 'bold'}]}
        />
        <TextAtom
          content={data.description.slice(0, 75) + '...'}
          textstyle={[styles.text, {fontSize: wp(3), fontWeight: 'bold'}]}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonAtom
          text={'Edit Product'}
          buttonStyle={{paddingVertical: hp(1)}}
          textcss={{color: '#fff', fontSize: wp(3)}}
        />
        <TouchableOpacity onPress={handleDeleteItem}>
          <TrashIcon size={hp(3.5)} color={'#E6486F'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardButton;

const styles = StyleSheet.create({
  button: {
    height: hp(35),
    width: wp(90),
    marginVertical: hp(1),
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 6,
    borderRadius: wp(5),
    padding: wp(3),
    gap: wp(3),
    justifyContent: 'center',
  },
  imageStyle: {
    height: '30%',
  },
  text: {
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
