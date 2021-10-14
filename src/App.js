import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import Registation from './Pages/Registation/Registation';
import Cart from './Pages/Cart/Cart';
function App() {
  return (
    <div>
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
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
