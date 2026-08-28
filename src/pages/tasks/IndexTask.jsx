import { Outlet } from 'react-router';
import { useTareas } from '../../hooks/useTarea';

export default function IndexTask() {
  const {tareas} = useTareas();
  console.log(tareas);
  return (
    <>
      <h1 className='text-2xl text-indigo-600 font-bold text-center'>Tareas</h1>
      <Outlet />
    </>
  )
}
