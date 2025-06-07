import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextAtom from './TextAtom';
import ButtonAtom from './ButtonAtom';

const PopUpAtom = ({handleDelteItem}) => {
  return (
    <View style={styles.container}>
      <TextAtom
        content={'Are you sure you want to delete this product?'}
        textstyle={{textAlign: 'center'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: wp(80),
        }}>
        <ButtonAtom
          handlePress={() => handleDelteItem(true)}
          text={'Yes'}
          textcss={{color: '#fff'}}
          buttonStyle={{backgroundColor: '#E6486F', paddingVertical: hp(1)}}
        />
        <ButtonAtom
          handlePress={() => handleDelteItem(false)}
          text={'No'}
          textcss={{color: '#fff'}}
          buttonStyle={{backgroundColor: '#E6486F', paddingVertical: hp(1)}}
        />
      </View>
    </View>
  );
};

export default PopUpAtom;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: hp(40),
    left: Dimensions.get('window').width / 2 - wp(45),
    width: wp(90),
    height: hp(15),
    backgroundColor: '#fff',
    zIndex: 999,
    padding: wp(2),
    alignItems: 'center',
    gap: wp(5),
    borderRadius: wp(6),
  },
});
