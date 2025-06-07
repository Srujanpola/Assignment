import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const TextAtom = ({content, textstyle}) => {
  return <Text style={[styles.text, textstyle]}>{content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: wp(5),
  },
});
export default TextAtom;
