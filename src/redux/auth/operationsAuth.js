import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Утиліта для додавання JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Утиліта для видалення JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * ПУБЛІКАЦІЯ @ /users/signup
 * тіло: {ім'я, адреса електронної пошти, пароль}
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      // Після успішної реєстрації додайте маркер до заголовка HTTP
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * ПУБЛІКАЦІЯ @ /users/login
 * тіло: { електронна пошта, пароль }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      // Після успішного входу додайте маркер до заголовка HTTP
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * ПУБЛІКАЦІЯ @ /users/logout
 * заголовки: Авторизація: маркер носія
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // Після успішного виходу видаліть маркер із HTTP-заголовка
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * заголовки: Авторизація: маркер носія
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Читання токена зі стану через getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // Якщо токена немає, вийти без виконання жодного запиту
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // Якщо є маркер, додайте його до HTTP-заголовка та виконайте запит
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
