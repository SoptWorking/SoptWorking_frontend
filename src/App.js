import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ModalPage from './pages/ModalPage';

const App = () => {
  return (
    <>
      {
        //<Route component={MainPage} path={["/"]} exact />
      }
      <Route component={ModalPage} path={["/"]} exact />
    </>
  );
};

export default App;
