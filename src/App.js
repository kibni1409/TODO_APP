import NewTaskForm from "./Components/NewTaskForm/NewTaskForm";
import TaskList from "./Components/TaskList/TaskList";
import Footer from "./Components/Footer/Footer";
import "./App.css"

function App() {
  return (
    <div className="todoapp">
      <NewTaskForm />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
