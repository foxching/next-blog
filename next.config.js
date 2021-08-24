const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'rechie',
        mongodb_password: 'iloveRuthy123',
        mongodb_database: 'next-blog',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'rechie',
      mongodb_password: 'iloveRuthy123',
      mongodb_database: 'next-blog',
    },
  };
};