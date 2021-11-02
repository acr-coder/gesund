import { Deployments } from "./components/Deployments";
import Header from "./components/header";
import './App.css'


function App() {
  return (
    <div className="box" >
      <header>
        <Header />
      </header>
      
        <Deployments />
      
    </div>
  );
}

export default App;
