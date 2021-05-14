// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/huangyu2/Wooh_Code/Dev/X-driver_test/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/BridgeLayout').default,
    "routes": [
      {
        "path": "/home.html",
        "exact": true,
        "component": require('/Users/huangyu2/Wooh_Code/Dev/X-driver_test/src/resources/pages/Home').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
