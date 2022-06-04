import './App.css';
import Login from "./Login";
import AfterLogin from './AfterLogin';
import AuthProvider from "./AuthProvider";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={AfterLogin} path="/after" />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
