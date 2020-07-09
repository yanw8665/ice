import * as React from 'react';
import * as ReactDOM from 'react-dom';
import deepmerge from 'deepmerge';

// TODO：默认的配置问题，如果要在外层使用应该怎么写
const DEFAULE_APP_CONFIG = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'hash',
  },
};

function renderWeb(appConfig = {}, runtimeConfig = {}, runtimeInstance) {
  const config = deepmerge(DEFAULE_APP_CONFIG, appConfig);

  // 1.创建 history 实例
  // const { type, basename = '', history: customHistory } = appConfig.router;
  // const history = customHistory || createHistory(type, basename);
  // config.router.history = history;

  // 2.加载运行时模块
  // const runtime = new RuntimeModule(config, {});
  // loadRuntimeModules(runtime);

  // 3.组装 App 组件
  const { rootId, mountNode } = config.app;
  const AppProvider = runtimeInstance.composeAppProvider();
  const AppRouter = runtimeInstance.getAppRouter();
  const App = () => {
    const appRouter = <AppRouter />;
    const element = AppProvider ? (
      <AppProvider>{appRouter}</AppProvider>
    ) : (
      appRouter
    );
    return element;
  };

  // 4.渲染 DOM
  const container = mountNode || document.getElementById(rootId);
  ReactDOM.render(<App />, container);
}

export default renderWeb;
