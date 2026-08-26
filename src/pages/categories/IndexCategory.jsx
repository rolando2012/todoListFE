import { Outlet } from "react-router"

export default function IndexCategory() {
  return (
    <>
      <h1 className='text-2xl text-indigo-600 font-bold text-center'>Categorias</h1>
      <Outlet />
    </>
  )
}
