import './App.css';
import { useTareas } from './hooks/useTarea.js';

function App() {
  const {tareas} = useTareas();
  console.log(tareas);

  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  )
}

export default App
