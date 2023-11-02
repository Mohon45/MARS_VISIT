/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import Input from "../pages/Shared/Input";

const Flex = ({ children }) => {
  return <div className="grid grid-cols-2 gap-2">{children}</div>;
};

const validationSchema = {
  fullName: Yup.string().required("Full Name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
};

const PersonalStage = ({
  data,
  setFormData,
  formData,
  step,
  handlePrev,
  handleNext,
}) => {
  const initialValues = {
    fullName: data.fullName || "",
    dob: data.dob || "",
    nationality: data.nationality || "",
    email: data.email || "",
    phone: data.phone || "",
  };
  const formikRef = useRef();
  return (
    <div className=" w-[70%] mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchema)}
        onSubmit={(values) => {
          setFormData({ ...formData, ...values });
          handleNext();
        }}
        innerRef={formikRef}
        enableReinitialize={true}
      >
        {() => (
          <Form>
            <Flex>
              <Input label="Full Name" name="fullName" type="text" />
              <Input label="Date Of Birth" name="dob" type="date" />
              <Input label="Nationality" name="nationality" type="text" />
              <Input label="Email" name="email" type="text" />
              <Input label="Phone" name="phone" type="text" />
            </Flex>

            <div className=" w-[300px] mx-auto my-8 flex justify-between">
              {step !== 0 && (
                <button
                  type="button"
                  className="bg-[#04D98C] px-8 py-1.5 text-xl font-semibold rounded-md"
                  onClick={() => handlePrev()}
                >
                  Prev
                </button>
              )}
              <button
                type="submit"
                className="bg-[#04D98C] px-8 py-1.5 text-xl font-semibold rounded-md"
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalStage;
