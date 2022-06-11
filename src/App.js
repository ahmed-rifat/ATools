import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login/Login';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Toaster></Toaster>
      <Login></Login>
    </div>
  );
}

export default App;
