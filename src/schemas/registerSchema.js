import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("El nombre es obligatorio").min(3,"Minimo introducir 3 caracteres"),
  email: yup.string().email("Email no válido").required("El email es obligatorio"),
  passwd: yup.string().required('La contaseña es obligatoria')
                      .min(8,'La contraseña debe tener al menos 8 caracteres.')
                      .matches(/[A-Z]/,'Debe de contener al menos una letra mayúscula')
                      .matches(/[a-z]/,'Debe de contener al menos una letra minuscula')
                      .matches(/[0-9]/,'Debe de contener al menos un número')
                      .matches(/[@$!%*?&.,^#]/,'Debe de contener al menos un caracter especial (@$!%*?&.,^#)'),
  passwd_confirmed:yup.string().required("Confirma tu contraseña")
                       .oneOf([yup.ref('passwd')],'Las contraseñas no coinciden')
}).required();