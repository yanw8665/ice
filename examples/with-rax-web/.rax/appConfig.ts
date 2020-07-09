// expose appConfig object
// using appConfig in other files or application
// example:
//  import { getAppConfig } from '$ice/appConfig';
//  const appConfig = getAppConfig();
let appConfig;

function setAppConfig(appConfigData) {
  appConfig = appConfigData;
}

function getAppConfig() {
  return appConfig;
}

export { setAppConfig, getAppConfig };
