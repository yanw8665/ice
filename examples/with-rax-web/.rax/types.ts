import React from 'react';

export interface IApp {
  rootId?: string;
  mountNode?: HTMLElement;
  addProvider?: ({
    children,
  }: {
    children: React.ReactNode;
  }) => React.ReactElement;
  getInitialData?: () => Promise<any>;
  ErrorBoundaryFallback?: React.ComponentType;
  onErrorBoundaryHander?: (error: Error, componentStack: string) => any;

  [key: string]: any;
}

declare global {
  interface Window {
    __ICE_SSR_ENABLED__: any;
    __ICE_APP_DATA__: any;
    __ICE_PAGE_PROPS__: any;
  }
}
