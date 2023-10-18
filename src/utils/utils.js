import {clearStorage} from './asyncStorage';
import {LOGOUT} from '../redux/commonActions';

const logout = async dispatch => {
  dispatch({type: LOGOUT});
  clearStorage();
};

export {logout};
