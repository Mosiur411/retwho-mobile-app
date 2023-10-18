import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import logger from '../utils/logger';
import usePostQuery from './postQuery.hook';
import useGetQuery from './getQuery.hook';
import {apiUrls} from '../apis';
import {SET_USER} from '../redux/commonActions';

const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const {postQuery, data: postQueryData} = usePostQuery();
  const {getQuery, data: getQueryData} = useGetQuery();
  const dispatch = useDispatch();
  const {_id} = useSelector(state => state.commonReducer.userDetails);

  const setProfile = async params => {
    const {
      onSuccess = () => {
        logger.log('onSuccess function');
      },
      onFail = () => {
        logger.log('onFail function');
      },
      postData,
    } = params;
    setLoading(true);

    await postQuery({
      url: apiUrls.updateUser,
      postData,
      onSuccess: async res => {
        await onSuccess(data);
        dispatch({type: SET_USER, payload: res?.data});
        setLoading(false);
      },
      onFail: err => {
        onFail(err);
        setLoading(false);
      },
    });
  };

  const getProfile = async params => {
    const {
      onSuccess = () => {
        logger.log('onSuccess function');
      },
      onFail = () => {
        logger.log('onFail function');
      },
      postData,
    } = params;
    setLoading(true);

    await getQuery({
      url: `${apiUrls.getUserDetails}?_id=${_id}`,
      postData,
      onSuccess: async res => {
        await onSuccess(data);
        dispatch({type: SET_USER, payload: res?.data});
        setLoading(false);
      },
      onFail: err => {
        setLoading(false);
        onFail(err);
      },
    });
  };

  return {
    setProfile,
    loading,
    setLoading,
    postQueryData,
    setData,
    error,
    setError,
    getProfile,
    getQueryData,
  };
};

export default useProfile;
