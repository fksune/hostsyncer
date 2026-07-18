/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from "@solidjs/router";
import 'solid-devtools';

import "./index.css";
import App from './App';

import { Hostnames } from "./pages/Hostnames/Hostnames";
import { Settings } from "./pages/Settings/Settings";
import { Analytics } from "./pages/Analytics";
import { Error } from "./pages/Error";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router root={App}>
      <Route path={"/"} component={Hostnames} />
      <Route path={"/setting"} component={Settings} />
      <Route path={"/analytics"} component={Analytics} />
      <Route path="*paramName" component={Error} />
    </Router>
  ),
  root!
);
