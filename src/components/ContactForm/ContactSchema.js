import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 chars")
    .max(30, "Max 30 chars")
    .required("This is a required field"),
  number: Yup.string()
    .matches(/^\d+$/, "Only digits allowed")
    .min(7, "Min 7 chars")
    .max(12, "Max 12 chars")
    .required("This is a required field"),
});
