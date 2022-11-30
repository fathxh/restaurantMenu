
import './App.css';
import Foot from "./Foot";
import Header from './Header'
import Home from './Home'
import Restaurantdetails from './Restaurantdetails'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom/'

function App() {
  return (
    <Router>
      <Header/>

    <Routes>
      <Route path='/details/:id' element={<Restaurantdetails/>}></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>



      <Foot/>
    </Router>
  );
}

export default App;
