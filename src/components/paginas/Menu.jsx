import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../firebase'
import Platillo from '../ui/Platillo'

const Menu = () => {
  const [platillos, guardarPlatillos] = useState([])
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const obtenerPlatillos = () => {
      firebase.db.collection('productos').onSnapshot(manejarSnapshot)
    }
    obtenerPlatillos()
  }, [])

  // Snapshot
  function manejarSnapshot(snapshot) {
    const platillos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })

    guardarPlatillos(platillos)
  }

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/nuevo-platillo"
        className="bg-sky-600 inline-block  py-2 px-3 font-bold rounded-full hover:bg-indigo-800 uppercase text-white"
      >
        Agregar Platillo
      </Link>
      {platillos.map((platillo) => (
        <Platillo key={platillo.id} platillo={platillo} />
      ))}
    </>
  )
}
export default Menu
