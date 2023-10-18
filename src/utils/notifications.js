import messaging from '@react-native-firebase/messaging';

const requestNotificationPermission = async () => {
  const enabled = await messaging().requestPermission();
  return enabled;
};

export {requestNotificationPermission};
