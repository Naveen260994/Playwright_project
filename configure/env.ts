import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL || '',
  USER_EMAIL: process.env.USER_EMAIL || '',
  USER_PASSWORD: process.env.USER_PASSWORD || ''
};