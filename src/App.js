import './App.css';
import SideBar from '../src/component/SideBar/SideBar';
import MainDash from './component/MainDash/MainDash';

function App() {
  return (
    <div className="App">
      <div className ="AppGlass">
      <SideBar />
      <MainDash />
      </div>
    </div>
  );
}

export default App;
