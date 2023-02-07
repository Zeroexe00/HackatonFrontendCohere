import storage from 'reduxjs-toolkit-persist/lib/storage';

export const reduxPersistConfig = {
  active: true,
  reducerVersion: 1,
  storage,
  key: 'root',
  whitelist: ['auth'],
};
