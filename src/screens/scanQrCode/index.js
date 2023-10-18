/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../routes/screenNames';

const ScanQrCode = ({route}) => {
  const scannerRef = useRef();
  const navigation = useNavigation();
  const [showScanner, setshowScanner] = useState(false);

  useEffect(() => {
    const onNavigation = () => {
      setshowScanner(true);
    };

    navigation.addListener('transitionEnd', onNavigation);

    return () => {
      navigation.removeListener('transitionEnd', onNavigation);
    };
  }, []);

  return (
    <>
      {/* <AppHeader showbackButton title={'Scan QR Code'} /> */}
      {showScanner && (
        <QRCodeScanner
          reactivate
          showMarker
          ref={scannerRef}
          onRead={e => {
            const data = JSON.parse(e?.data);
            if (!data) {
              return;
            }
            if (route?.params?.external) {
              if (!data?.scan_url) {
                return;
              }
              navigation.navigate(screenNames.WebView, {
                url: data?.scan_url,
              });
            } else {
              if (!data?.sticker_id) {
                return;
              }
              navigation.navigate(screenNames.StickerDetails, {
                sticker_id: data?.sticker_id,
              });
            }
          }}
        />
      )}
    </>
  );
};

export default ScanQrCode;
// const styles = StyleSheet.create({});

// topContent={
//   <Text style={{color: '#000', textAlign: 'center'}}>
//     QR Code Scanner
//   </Text>
// }
// bottomContent={
//   <View style={{flexDirection: 'row', justifyContent: 'center'}}>
//     <TouchableOpacity
//       style={styles.buttonTouchable}
//       onPress={() => scannerRef?.current?.reactivate()}>
//       <Text style={{color: 'blue'}}>OK. Got it!</Text>
//     </TouchableOpacity>

//     <TouchableOpacity
//       style={styles.buttonTouchable}
//       onPress={() => {
//         setScan(false);
//       }}>
//       <Text style={{color: 'blue'}}>Stop Scan</Text>
//     </TouchableOpacity>
//   </View>
// }
