import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import TextAtom from './TextAtom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ButtonAtom = ({buttonStyle, text, textcss,handlePress,disabled}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={handlePress} disabled={disabled ?? false}>
      <TextAtom content={text} textstyle={textcss} />
    </TouchableOpacity>
  );
};

export default ButtonAtom;

const styles = StyleSheet.create({
  button: {
    width: wp(30),
    alignItems: 'center',
    paddingVertical: hp(2),
    backgroundColor: '#E6486F',
    borderRadius: wp(2),
  },
});
