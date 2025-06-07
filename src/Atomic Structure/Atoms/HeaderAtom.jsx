import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextAtom from './TextAtom';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
const HeaderAtom = ({content, showBackButton}) => {
  return (
    <View style={styles.container}>
      {showBackButton && <ArrowLeftIcon size={30} color="#000" />}
      {content && <TextAtom content={content} />}
    </View>
  );
};

export default HeaderAtom;

const styles = StyleSheet.create({
  container: {},
});
