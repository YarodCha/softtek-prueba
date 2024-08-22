import * as yup from "yup";

export const schema = yup
  .object({
    documentType: yup.string().required(),
    documentNumber: yup
      .string()
      .required("*El documento ingresado no es válido"),
    cellphone: yup.string().required("*El celular ingresado no es válido"),
    ppCheck: yup.boolean().required().oneOf([true]),
    ccpCheck: yup.boolean().required().oneOf([true]),
  })
  .required();

export type LoginFormData = yup.InferType<typeof schema>;
