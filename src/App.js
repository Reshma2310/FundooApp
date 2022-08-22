import logo from './logo.svg';
import './App.css';
import Signin from './components/signinfolder/signinpage';
import Signup from './components/signupfolder/signuppage';
import Header from './components/header/header';
import NoteOne from './components/takenote1/noteone';
import NoteTwo from './components/takenote2/notetwo';
import NoteThree from './components/takenote3/notethree';
import DashBoard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Header /> */}
      {/* <NoteOne /> */}
      {/* <NoteTwo /> */}
      {/* <NoteThree /> */}
      <DashBoard />
    </div>
  );
}

export default App;
