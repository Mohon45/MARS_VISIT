/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import Input from "../pages/Shared/Input";
import Select from "../pages/Shared/Select";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../pages/Shared/Loader";

const Flex = ({ children }) => {
  return <div className="grid grid-cols-2 gap-2">{children}</div>;
};

const validationSchema = {
  healthDeclaration: Yup.string().required("Health Declaration is required"),
  emgContact: Yup.string().required("Emergency Contact is required"),
  medicalCondition: Yup.string().optional("Special Requests is Optional"),
};

const HelthStage = ({
  data,
  setFormData,
  formData,
  step,
  handlePrev,
  handleNext,
}) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    healthDeclaration: data.healthDeclaration || "",
    emgContact: data.emgContact || "",
    medicalCondition: data.medicalCondition || "",
  };
  const formikRef = useRef();

  const onsubmitHandler = async (data) => {
    setLoading(true);
    try {
      await axios
        .post(
          "https://mars-visit-api.vercel.app/api/v1/application/create",
          data
        )
        .then((res) => {
          if (res.data.data) {
            toast.success("Application Form successfully Submitted");
            setLoading(false);
            handleNext();
          }
        })
        .catch((error) => {
          toast.error("Something went wrong! Please try again later");
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-[70%] mx-auto">
      {loading && <Loader forProcess={true} />}
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchema)}
        onSubmit={(values) => {
          setFormData({ ...formData, ...values });
          onsubmitHandler({ ...formData, ...values });
        }}
        innerRef={formikRef}
        enableReinitialize={true}
      >
        {() => (
          <Form>
            <Flex>
              <Select label="Health Declaration" name="healthDeclaration">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
              <Input
                label="Emergency Contact Information"
                name="emgContact"
                type="text"
              />
              <Input
                label="Any Medical Conditions"
                name="medicalCondition"
                type="text"
              />
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
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HelthStage;
