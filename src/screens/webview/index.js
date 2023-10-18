import {WebView} from 'react-native-webview';
import {StyleSheet} from 'react-native';
import ContentWrapper from '../../components/contentWrapper';
// import AppHeader from '../../components/header';

const WebViewScreen = ({route}) => (
  <ContentWrapper>
    {/* <AppHeader showbackButton title={route?.params?.title} /> */}
    <WebView
      source={{uri: `${route?.params?.url}`}}
      style={styles.container}
      flex={1}
    />
  </ContentWrapper>
);

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
});
