import renderRaxWeb from './renderer/raxWeb';

function runApp(appConfig = {}, runtimeConfig = {}) {
  renderRaxWeb(appConfig);
}

export { runApp };
