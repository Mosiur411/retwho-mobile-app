import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import CodePush from 'react-native-code-push';
import colors from '../../constants/colors';
import TextWrapper from '../textWrapper';

const CodePushProvider = () => {
  const [codepushProgress, setCodepushProgress] = useState(0);

  useEffect(() => {
    CodePush.sync(
      {
        deploymentKey: Platform.select({
          ios: '',
          android: '',
        }),
        // updateDialog: true,
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      () => {},

      progress => {
        /* eslint-disable */
        setCodepushProgress(
          (progress?.receivedBytes * 100) / progress.totalBytes,
        );
      },
    );
  }, []);

  if (!codepushProgress) {
    return null;
  }

  return (
    <View style={styles.progressWrapper}>
      <TextWrapper
        style={styles.heading}
        text={'Please wait, We are making your experience better'}
      />
      <TextWrapper
        style={styles.percent}
        text={`${parseInt(codepushProgress, 10)}%`}
      />
    </View>
  );
};

export default CodePushProvider;

const styles = StyleSheet.create({
  progressWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#2d2e31',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    zIndex: 100,
  },
  heading: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  percent: {
    color: colors.appColor,
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 24,
  },
});
