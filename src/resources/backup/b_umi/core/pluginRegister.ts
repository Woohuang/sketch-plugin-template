// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/huangyu2/Wooh_Code/Dev/X-driver_test/src/resources/.umi/plugin-dva/runtime.tsx';
import * as Plugin_1 from '../plugin-initial-state/runtime';
import * as Plugin_2 from '/Users/huangyu2/Wooh_Code/Dev/X-driver_test/src/resources/.umi/plugin-locale/runtime.tsx';
import * as Plugin_3 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/huangyu2/Wooh_Code/Dev/X-driver_test/src/resources/.umi/plugin-dva/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_1,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_2,
    path: '/Users/huangyu2/Wooh_Code/Dev/X-driver_test/src/resources/.umi/plugin-locale/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_3,
    path: '../plugin-model/runtime',
  });
