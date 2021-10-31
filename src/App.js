import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewService from './Components/AddNewService/AddNewService';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import MyOrders from './Components/MyOrders/MyOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/booknow/:id" >
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders" >
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <PrivateRoute path="/Add A New Service">
              <AddNewService></AddNewService>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;
