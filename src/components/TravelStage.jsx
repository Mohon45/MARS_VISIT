/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import Input from "../pages/Shared/Input";
import Select from "../pages/Shared/Select";

const Flex = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">{children}</div>
  );
};

const validationSchema = {
  departureDate: Yup.date().required("Departure Date is required"),
  returnDate: Yup.date().required("Return Date is required"),
  accommodationPreference: Yup.string().required(
    "Accommodation Preference is required"
  ),
  specialRequest: Yup.string().optional("Special Requests is Optional"),
};

const TravelStage = ({
  data,
  setFormData,
  formData,
  step,
  handlePrev,
  handleNext,
}) => {
  const initialValues = {
    departureDate: data.departureDate || "",
    returnDate: data.returnDate || "",
    accommodationPreference: data.accommodationPreference || "",
    specialRequest: data.specialRequest || "",
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
              <Input label="Departure Date" name="departureDate" type="date" />
              <Input label="Return Date" name="returnDate" type="date" />
              <Select
                label="Accommodation Preference"
                name="accommodationPreference"
              >
                <option value="">Select</option>
                <option value="space_hotel">Space Hotel</option>
                <option value="martian_base">Martian Base</option>
              </Select>
              <Input
                label="Special Requests"
                name="specialRequest"
                type="text"
              />
            </Flex>

            <div className="md:w-[300px] mx-auto my-8 flex justify-between">
              {step !== 0 && (
                <button
                  type="button"
                  className="bg-[#04D98C] md:px-8 px-4 py-1.5 md:text-xl font-semibold rounded-md"
                  onClick={() => handlePrev()}
                >
                  Prev
                </button>
              )}
              <button
                type="submit"
                className="bg-[#04D98C] md:px-8 px-4 py-1.5 md:text-xl font-semibold rounded-md"
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

export default TravelStage;
