import "bootswatch/dist/sandstone/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from "./Footer/component";


import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import RouteList from './RouteList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RouteList />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;