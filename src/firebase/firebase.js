import app from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// importaciones necesarias para insertar
import { getFirestore, collection, addDoc } from 'firebase/firestore'

import firebaseConfig from './config'

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig)
    }

    // inicialización de firestore
    this.db = getFirestore()

    // añadir un nuevo documento
    this.insertDocument = async function insertDocument(
      coleccion = '',
      cuerpo = {},
    ) {
      const resultado = await addDoc(collection(this.db, coleccion), {
        ...cuerpo,
      })
      return resultado
    }
  }
}

const firebase = new Firebase();
export default firebase;


