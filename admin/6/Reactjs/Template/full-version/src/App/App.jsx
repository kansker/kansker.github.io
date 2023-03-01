import React from "react";
import Layout from '../layout/';
import { library } from "@fortawesome/fontawesome-svg-core";
import '../index.scss';

import fontAwesomeIcon from "../utility/icons/fontawesome";
library.add(fontAwesomeIcon);


const App = () => <Layout />;

export default App;
