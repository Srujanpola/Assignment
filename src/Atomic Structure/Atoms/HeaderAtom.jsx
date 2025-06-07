import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TextAtom from './TextAtom';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const HeaderAtom = ({content, showBackButton, handleBackPress}) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={30} color="#000" />
        </TouchableOpacity>
      )}
      {content && <TextAtom content={content} textstyle={{width: '90%'}} />}
    </View>
  );
};

export default HeaderAtom;

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(2.5),
    paddingLeft: wp(5),
    paddingRight: wp(5),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: wp(5),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
