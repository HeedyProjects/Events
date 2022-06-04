import {configureStore} from '@reduxjs/toolkit';
import friendReducer from './friendsSlice';

export default configureStore({
  reducer: {
    friends: friendReducer,
  },
});
