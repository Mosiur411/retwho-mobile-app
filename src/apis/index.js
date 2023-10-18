// import Config from 'react-native-config';
export const apiBaseUrl = 'https://yoshha-backend-one.vercel.app/';

// export const apiBaseUrl = Config.API_URL;

export const apiUrls = {
  sendOtp: 'api/v1/auth/sendOtp',
  verifyOtp: 'api/v1/auth/verifyOtp',
  updateProfile: 'api/v1/users/updateProfile',
  getProfile: 'api/v1/users/getProfile',
  getUserQuiz: 'api/v1/userQuiz/getNextQuiz',
  submitUserResponses: 'api/v1/userQuiz/submitResponses',
  uploadFile: '/api/v1/upload/uploadFile',
  getStory: '/api/v1/story/getStory',
  createStory: '/api/v1/story/createStory',
  likeStory: '/api/v1/story/createLike',
  dislikeStory: '/api/v1/story/dislike',
  createWords: '/api/v1/words/createWords',
  getWords: '/api/v1/words/getWords',
  getMenopauseStats: '/api/v1/userQuiz/getmenopause',
  getNotification: '/api/v1/story/notifications',
  createEmoji: '/api/v1/emoji/createEmoji',
  getEmoji: '/api/v1/emoji/getEmoji',
  latestResponse: '/api/v1/userQuiz/latestResponse',
};
