import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const urlActual = useLocation().pathname
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-slate-800">
      <div className="p-6">
        <p className="text-white uppercase text-center font-bold tracking-wide ">
          Restaurante TT
        </p>
        <p className="mt-3 text-gray-500">
          Administra tu restaurante en las siguientes opciones
        </p>
        <nav className="mt-10">
          <NavLink
            className={`${
              urlActual === '/' ? 'text-yellow-400' : 'text-gray-300'
            }  p-1 block hover:bg-yellow-400 hover:text-gray-900 `}
            end to={'/'}
          >
            Ordenes
          </NavLink>
          <NavLink
            className={`${
              urlActual === '/menu' ? 'text-yellow-400' : 'text-gray-300'
            } p-1 block hover:bg-yellow-400 hover:text-gray-900 `}
            end to={'/menu'}
          >
            Menú
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
