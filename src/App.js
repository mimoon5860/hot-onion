import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import Registation from './Pages/Registation/Registation';
import Cart from './Pages/Cart/Cart';
import Details from './Pages/Details/Details';
import AuthProvidor from './Pages/AuthProvidor/AuthProvidor.js';
function App() {
  return (
    <AuthProvidor>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Registation></Registation>
          </Route>
          <Route path='/cart'>
            <Cart></Cart>
          </Route>
          <Route path="/item/:itemId">
            <Details></Details>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvidor>
  );
}

export default App;
