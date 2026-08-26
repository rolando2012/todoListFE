import { useTareas } from './hooks/useTarea.js';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';

function App() {
  const {tareas} = useTareas();
  console.log(tareas);

  return (
    <>
      <Navbar />
      <main>
        <h1 class="text-3xl font-bold text-indigo-600 text-center">Tareas</h1>
      
        <Outlet />
      </main>
    </>
  )
}

export default App
