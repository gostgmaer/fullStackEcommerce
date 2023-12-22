import axios from 'axios';

export default {
  providers: [
    {
      id: 'custom-api',
      name: 'Custom API',
      type: 'credentials',
      credentials: {},
      authorize: async (credentials) => {
        // Call your custom API here to authenticate the user
        const response = await axios.post('/api/authenticate', credentials);

        if (response.data) {
          return Promise.resolve(response.data);
        } else {
          return Promise.resolve(null);
        }
      },
    },
  ],
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async (session, user) => {
      session.user.id = user.id;
      return Promise.resolve(session);
    },
  },
};
