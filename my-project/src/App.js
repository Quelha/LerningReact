import './App.css';
import HelloWord from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  return (
    <div className="App">
      <HelloWord/>
      <SayMyName nome="Felipe"/>
      <Pessoa nome="Felipe" idade= "28" profissao= "Dev"/>
    </div>
  );
}

export default App;
