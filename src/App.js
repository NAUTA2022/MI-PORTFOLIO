import './App.css';
import Nav from "./components/nav/nav";
import Burguer from "./components/burguer/burguer";
import Target from "./components/target/target";
import Hero from "./components/hero/hero";
import Acordeon from "./components/acordeon/acordeon";
import Doors from "./components/doors/doors";
import Projects from "./components/projects/projects";
import Form from "./components/form/form";
import Ending from "./components/ending/ending";

function App() {
  return (
    <div className="App">
      <div class="todo">

       <div className="burguer">
       <Burguer/>
       </div>

      
      <div className="navi">
       <Nav/>
       </div>
       
       <div className="tarjetita">
       <Target/>
       </div>

       <div class="textoscroll">
       <p>Scroll for more or use the navigation bar</p>
       </div>

       <div className="ACO">
       <Acordeon/>
       </div>

       <div className="HERO">
       <Hero/>
       </div>

       <div className="Projecss">
       <Projects/>
       </div>

       <div className="Door">
       <Doors/>
       </div>
       
       <div className="Formulario">
       <Form/>
       </div>

       <div className="Final">
       <Ending/>
       </div>

      </div>
    </div>
  );
}

export default App;
