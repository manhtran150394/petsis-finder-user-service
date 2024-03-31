import { DEFAULT_PORT } from '../constants';

export default () => ({
  port: parseInt(process.env.PORT, 10) || DEFAULT_PORT,
  database: {
    mongodb: {
      uri: process.env.MONGODB_URI,
    },
  },
});
