import logo from './logo.svg';
import './App.css';
import SurahList from './component/SurahList';
import { Header } from './component/Header';
import HttpRequestDemo from './component/SurahList';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header />
        <HttpRequestDemo />
      </header>
    </div>
  );
}

export default App; 
