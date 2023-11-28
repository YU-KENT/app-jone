import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


// Import your reducer(s)
import loginReducer from '../features/loginReducer';
import projectReducer from'../features/projectReducer'
// Create a persist configuration
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['register'], // Exclude the 'register' key from persistence
  };

// Create a persisted reducer using the persist configuration
const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
const persistedProjectReducer = persistReducer(persistConfig, projectReducer);
// Create the Redux store using configureStore
export const store = configureStore({
  reducer: {
    login:persistedLoginReducer,
    project: persistedProjectReducer
         
  
  },
  
});

// Create the persistor
export const persistor = persistStore(store);

// Export the store and persistor


