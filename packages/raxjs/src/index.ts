const getBuiltInPlugins = () => {
  // built-in plugins for raxjs
  const builtInPlugins = [
    'build-plugin-ice-core',
    ['build-plugin-rax-app', {
      targets: ['web']
    }],
  ];

  return builtInPlugins;
};

export = getBuiltInPlugins
