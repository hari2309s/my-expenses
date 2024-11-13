import './App.css';
import Dashboard from './components/Dashboard';
import AppIcon from './assets/app-icon.png';

const App = () => {
  return (
    <div className="container m-4 mx-auto my-auto h-screen text-center">
      <div className="container m-6 mx-auto flex flex-col items-center justify-center rounded-md bg-floralwhite p-4">
        <img src={AppIcon} width={30} height={30} alt="App icon" />
        <h1 className="text-2xl font-bold text-darkslategrey">My expenses</h1>
      </div>
      <Dashboard />
    </div>
  );
};

export default App;
