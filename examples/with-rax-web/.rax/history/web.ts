import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
  History,
  // @ts-ignore
} from '$ice/history';

// provide history instance
// can be used in the application through history.push()
let history: History;

function createHistory(type: string, basename: string) {
  const histories = {
    hash: createHashHistory,
    browser: createBrowserHistory,
    memory: createMemoryHistory,
  };
  // Note: only support createHashHistory and createBrowserHistory parameters
  // https://github.com/ReactTraining/history/blob/master/modules/createBrowserHistory.js#L37
  const props = type === 'hash' || type === 'browser' ? { basename } : {};
  history = histories[type](props);
  return history;
}

function getHistory(appConfig) {
  const { type, basename = '', history: customHistory } = appConfig.router;
  history = customHistory || createHistory(type, basename);
  return history;
}

export { history, getHistory, createHistory };
