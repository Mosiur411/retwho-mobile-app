import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

const ContentWrapper = ({children, containerStyle}) => (
  <SafeAreaView style={[styles.mainContainer, containerStyle]}>
    {children}
  </SafeAreaView>
);

export default ContentWrapper;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
