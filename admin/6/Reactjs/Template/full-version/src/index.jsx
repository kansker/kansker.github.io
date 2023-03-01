import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './redux/';
import * as serviceWorker from './serviceWorker';
import Config from './configure';
import Spinner from './components/spinner/Spinner';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./index.scss"
import "./assets/fonts/feather/css/feather.css";
import "flag-icon-css/sass/flag-icon.scss"


const App = lazy(() => import("./App/App"))

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={Config.basename}>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  root
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
