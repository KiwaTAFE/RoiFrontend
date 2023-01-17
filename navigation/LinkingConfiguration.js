import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        path: '/',
        screens: {
          Home: 'home',
          Help: 'help',
        },
      },
      NotFound: '*', // catch-all route (404 resource not found)
    },
  },
};
