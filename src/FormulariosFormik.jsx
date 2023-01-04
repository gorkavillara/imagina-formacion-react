import React from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

const FormulariosFormik = () => {
  const valSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Nombre de usuario demasiado corto")
      .required("Campo obligatorio"),
    password: Yup.string()
      .min(2, "Contraseña demasiado corta")
      .required("Campo obligatorio"),
  })

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={valSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Field
            id="username"
            name="username"
            placeholder="Tu nombre de usuario"
          />
          {errors.username
            && touched.username 
              && <span style={{color: "red"}}>
                  {errors.username}
                </span>}
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Tu contraseña"
            />
          {errors.password && touched.password && <span style={{color: "red"}}>{errors.password}</span>}
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormulariosFormik
