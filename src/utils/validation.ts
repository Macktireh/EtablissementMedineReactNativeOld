import * as yup from "yup";

const phoneRegExp = /^77\d{6}$/;
const emailRegExp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const signupSchemaValidation = yup
  .object({
    name: yup.string().required("Veuillez saisir votre nom"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Veuillez saisir un numéro de téléphone valide")
      .required("Veuillez saisir votre numéro de téléphone"),
    email: yup
      .string()
      .matches(emailRegExp, "Veuillez saisir un email valide")
      .required("Veuillez saisir votre email"),
    password: yup
      .string()
      .matches(
        passwordRegExp,
        "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, minuscule, un chiffre et un caractère spécial."
      )
      .required("Veuillez saisir votre mot de passe"),
    confirmPassword: yup
      .string()
      .required("Veuillez confirmer votre mot de passe")
      .oneOf([yup.ref("password")], "Les mots de passe ne sont pas identiques"),
  })
  .required();

export const loginSchemaValidation = yup
  .object({
    email: yup
      .string()
      .email("Veuillez saisir un email valide")
      .required("Veuillez saisir votre email"),
    password: yup.string().required("Veuillez saisir votre mot de passe"),
  })
  .required();
