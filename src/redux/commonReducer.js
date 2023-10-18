import {
  LOGOUT,
  SET_IS_ONBOARDED,
  SET_QUIZ,
  SET_USER,
  SET_AUTH_TOKEN,
} from './commonActions';

const initialState = {
  userDetails: {},
  isOnboarded: false,
  quiz: {},
  token: '',
};

const commonReducer = (state = initialState, action = '') => {
  switch (action.type) {
    case SET_USER: {
      return {...state, userDetails: action.payload};
    }
    case LOGOUT: {
      return {
        ...state,
        userDetails: {},
        isOnboarded: false,
        token: '',
        quiz: {},
      };
    }
    case SET_IS_ONBOARDED: {
      return {...state, isOnboarded: action.payload};
    }
    case SET_QUIZ: {
      return {...state, quiz: action.payload};
    }
    case SET_AUTH_TOKEN:
      return {...state, token: action.payload};

    default:
      return state;
  }
};

export default commonReducer;
