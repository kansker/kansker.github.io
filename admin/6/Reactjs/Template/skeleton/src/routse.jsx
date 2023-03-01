import { lazy } from 'react';

const SamplePage = lazy(() => import("./views/others/samplePage"));

const RouteList = [
  /* Other pages */
  { exact: true, path: "/page/sample-page", name: "Sample Page", component: SamplePage }
];


export default RouteList
