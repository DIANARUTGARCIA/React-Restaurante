import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'

const NuevoPlatillo = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      categoria: '',
      imagen: '',
      description: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, 'Los Platillos deben tener al menos 3 caracteres')
        .required('El Nombre del platillo es obligatorio'),
      precio: Yup.number()
        .min(1, 'Debes agregar un número')
        .required('El Precio es obligatorio'),
      categoria: Yup.string().required('La categoría es obligatoria'),
      description: Yup.string()
        .min(10, 'La descripción debe ser más larga')
        .required('La descripción es obligatoria'),
    }),
    onsubmit: (datos) => {
      console.log(datos)
    },
  })

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre Platillo"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={Formik.handleBlur}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.nombre} </p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio"
              >
                Precio
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="precio"
                type="number"
                placeholder="$20"
                min={0}
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={Formik.handleBlur}
              />
            </div>
            {formik.touched.precio && formik.errors.precio ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.precio} </p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Categoria
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={Formik.handleBlur}
              >
                <option value="">--Seleccione--</option>
                <option value="desayuno">Desayuno</option>
                <option value="comida">Comida</option>
                <option value="cena">Cena</option>
                <option value="Bebidas">Bebidas</option>
                <option value="ensalada">Ensaladas</option>
              </select>
            </div>
            {formik.touched.categoria && formik.errors.categoria ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.categoria} </p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio"
              >
                Imagen
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="precio"
                type="file"
                value={formik.values.imagen}
                onChange={formik.handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Descripción
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                id="nombre"
                placeholder="Descripción del Platillo"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={Formik.handleBlur}
              >
                {' '}
              </textarea>
            </div>
            {formik.touched.description && formik.errors.description ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.description} </p>
              </div>
            ) : null}

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              value={'Agregar Platillo'}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default NuevoPlatillo
