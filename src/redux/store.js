import { configureStore } from '@reduxjs/toolkit';
import authorizationReducer from './authorizationSlice';
import userReducer from './userSlice';
import contactsReducer from './contactsSlice';
import notificationReducer from './notificationSlice';

const store = configureStore({
  reducer: {
    auth: authorizationReducer,
    user: userReducer,
    contacts: contactsReducer,
    notification: notificationReducer,
  },
});

export default store;
