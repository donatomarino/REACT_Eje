import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';
import ToggleVisibility from './components/ToggleVisibility';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* <Clock ciudad = 'Salerno'/> */}
      <MyComponent />
    </div>
  );
}

export default App;
