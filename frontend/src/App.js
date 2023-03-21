import logo from './logo.svg';
import './App.css';
import All from './Componants/Test';
// import Navbar from './Componants/Navbar';
import Homepage from './Mainpages/Homepage';
import Addmovie from './Componants/Adminpanel/Addmovie';
import AdminLogin from './Componants/Adminpanel/AdminLogin';
import Allroutes from './Mainpages/Allroutes';
import Navbar from './Componants/Navbar';
// import Navbar from './Componants/Navbar';

function App() {
  return (
    <div className="App">
      <Allroutes/>
      <Navbar/>
      {/* <Homepage/> */}
      {/* <All/> */}
      {/* <AdminLogin/> */}
      {/* <Addmovie/> */}
    </div>
  );
}

export default App;
