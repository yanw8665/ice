import * as React from 'react';

function lazy(dynamicImport, isRouteComponent?: Boolean): any {
  if (isRouteComponent) {
    return {
      __LAZY__: true,
      dynamicImport,
    };
  } else {
    return React.lazy(dynamicImport);
  }
}

export { lazy };
