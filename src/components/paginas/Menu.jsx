import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/nuevo-platillo"
        className="bg-sky-600 inline-block  py-2 px-3 font-bold rounded-full hover:bg-indigo-800 uppercase text-white"
      >Agregar Platillo</Link>
    </>
  )
}
export default Menu
