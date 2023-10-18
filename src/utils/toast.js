import {Toast} from 'react-native-toast-message/lib/src/Toast';

// @forhad - please use thes function everywhere in the code for toasts
const showError = ({text}) => {
  Toast.show({
    type: 'error',
    text2: text,
  });
};

const showSuccess = ({text}) => {
  Toast.show({
    type: 'success',
    text2: text,
  });
};

const showInfo = ({text}) => {
  Toast.show({
    type: 'info',
    text2: text,
  });
};

export {showError, showSuccess, showInfo};
