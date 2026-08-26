import { useTareas } from './hooks/useTarea.js';
import Navbar from './components/Navbar';

function App() {
  const {tareas} = useTareas();
  console.log(tareas);

  return (
    <>
      <Navbar />
      <h1 class="text-3xl font-bold text-indigo-600 text-center">Tareas</h1>
    </>
  )
}

export default App
