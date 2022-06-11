import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login/Login';
import { Toaster } from 'react-hot-toast';
import Header from './Component/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Toaster></Toaster> */}
      <Login></Login>
    </div>
  );
}

export default App;
