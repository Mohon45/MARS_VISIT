import * as Yup from "yup";

const step1Schema = {
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
};

export { step1Schema };
