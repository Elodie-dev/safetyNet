import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import './css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/404';
import SelectStation from './components/SelectStation';
import FirestationCovert from './components/FirestationCovert';
// import Firestation from './components/CRUD/Firestation';
// import FirestationForm from './components/CRUD/FirestationForm';
// import FirestationDetails from './components/CRUD/FirestationDetails';
// import DeleteFirestation from './components/CRUD/DeleteFirestation';
// import Medicalrecord from './components/CRUD/Medicalrecord';
// import Person from './components/CRUD/Person';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/firestations" component={SelectStation} />
          <Route exact path="/firestation/stationNumber:station" component={FirestationCovert} />
          {/* <Route exact path="/firestation" component={Firestation} />
          <Route exact path="/firestation/add" component={FirestationForm} />
          <Route exact path="/firestation/update/:id" component={FirestationDetails} />
          <Route exact path="/firestation/delete/:id" component={DeleteFirestation} />
          <Route exact path="/medicalrecord" component={Medicalrecord} />
          <Route exact path="/person" component={Person} /> */}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
