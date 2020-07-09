const getBuiltInPlugins = () => {
  // built-in plugins for raxjs
  const builtInPlugins = [
    ['build-plugin-rax-app', {
      targets: ['web']
    }],
    'build-plugin-ice-core'
  ];

  return builtInPlugins;
};

export = getBuiltInPlugins
