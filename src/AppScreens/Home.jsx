import React, {useCallback} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import TextAtom from '../Atomic Structure/Atoms/TextAtom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderAtom from '../Atomic Structure/Atoms/HeaderAtom';
import {useFocusEffect} from '@react-navigation/native';
import appMngr from '../Managers/AppManager';
const HOME = () => {
  useFocusEffect(
    useCallback(() => {
      const products = appMngr.getAllProducts();
      console.log('products are', products);
    }, []),
  );
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <HeaderAtom content={'Available Products'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingVertical: hp(5),
    paddingHorizontal: wp(5),
  },
  container: {
    flex: 1,
  },
});
export default HOME;
