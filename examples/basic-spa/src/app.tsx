import React from 'react';
import { runApp, APP_MODE } from 'ice';

runApp({
  app: {
    rootId: 'ice-container',
    errorBoundary: true,
    parseSearchParams: true
  },
  logger: {
    level: APP_MODE === 'build' ? 'error' : 'debug',
  },
  router: {
    basename: '/ice',
    type: 'hash',
    fallback: <div>加载中...</div>
  },
  request: {
    timeout: 5000,
    baseURL: '/',
    interceptors: {
      request: {
        onConfig: (config) => {
          return config;
        }
      }
    }
  }
}, {

});
