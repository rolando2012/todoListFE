import { useTareas } from './hooks/useTarea.js';

function App() {
  const {tareas} = useTareas();
  console.log(tareas);

  return (
    <>
      <h1 class="text-3xl font-bold text-indigo-600 text-center">Tareas</h1>
    </>
  )
}

export default App
