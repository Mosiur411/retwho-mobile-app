import React, {memo, useCallback, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {images} from '../../constants/images';
import {getItem} from '../../utils/asyncStorage';
import useGetQuery from '../../hooks/getQuery.hook';
import asyncStorageConstants from '../../constants/asyncStorageConstants';
import {apiUrls} from '../../apis';
import {SET_IS_ONBOARDED, SET_USER, SET_QUIZ} from '../../redux/commonActions';
import {requestNotificationPermission} from '../../utils/notifications';
// import {getQuziesFromJson} from '../../utils/functions';

const SplashScreen = ({setShowSplash}) => {
  const {getQuery} = useGetQuery();
  const dispatch = useDispatch();
  const getUserInfo = useCallback(async () => {
    const token = await getItem(asyncStorageConstants.accessToken);
    const isOnboarded = await getItem(asyncStorageConstants.isOnboarded);
    if (token) {
      await getQuery({
        url: apiUrls.getProfile,
        onSuccess: item => {
          dispatch({
            type: SET_USER,
            payload: item?.data,
          });
        },
      });
      await getQuery({
        url: apiUrls?.getUserQuiz,
        onSuccess: async quizData => {
          // if (
          //   quizData?.name === 'IntakePersonalization Test' ||
          //   quizData?.name === 'MenopauseSymptoms Test' ||
          //   quizData?.name === 'Menopause Symptoms Summary'
          // ) {
          dispatch({
            type: SET_QUIZ,
            payload: {
              ...quizData,
              // questions: getQuziesFromJson(quizData?.name),
            },
          });
          // } else {
          //   dispatch({
          //     type: SET_QUIZ,
          //     payload: {
          //       ...quizData,
          //     },
          //   });
          // }
          dispatch({
            type: SET_IS_ONBOARDED,
            payload: isOnboarded,
          });
        },
      });

      setShowSplash(false);
    }
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  useEffect(() => {
    requestNotificationPermission();
    getUserInfo();
  }, [getUserInfo]);

  return (
    <View style={styles.container}>
      <Image
        source={images.AppLogo}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default memo(SplashScreen);

const styles = StyleSheet.create({
  image: {height: 200},
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
