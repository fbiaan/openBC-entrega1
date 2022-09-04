import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';


import ContactComponent from './components/pure/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {/* <Greeting></Greeting> */}
        {/* <GreetingF name="fabian"></GreetingF>
        <TaskListComponent></TaskListComponent> */}
        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;
