import logo from './logo.svg';
import './App.css';
import Navigation from './customer/comonents/Navigation/Navigation';
import Homepage from './customer/Pages/homepages/Homepage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
