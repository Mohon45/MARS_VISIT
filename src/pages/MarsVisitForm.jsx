import { useState } from "react";
import { Stepper } from "react-form-stepper";
import PersonalStage from "../components/PersonalStage";
import TravelStage from "../components/TravelStage";
import HelthStage from "../components/HelthStage";
import Complete from "../components/Complete";

const steps = [
  { label: "Personal Information" },
  { label: "Travel Preferences" },
  { label: "Health and Safety" },
  { label: "Done" },
];

/* eslint-disable no-unused-vars */
const MarsVisitForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const stepStyleDTO = {
    activeBgColor: "#39A7FF",
    inactiveTextColor: "black",
    completedBgColor: "green",
    labelFontSize: "12px",
  };

  return (
    <div>
      <div>
        <Stepper
          steps={steps}
          activeStep={step}
          styleConfig={stepStyleDTO}
          className="w-[100%] mx-auto"
        />
      </div>
      {step === 0 && (
        <PersonalStage
          data={formData}
          step={step}
          handleNext={handleNext}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 1 && (
        <TravelStage
          data={formData}
          step={step}
          handlePrev={handlePrev}
          handleNext={handleNext}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 2 && (
        <HelthStage
          data={formData}
          step={step}
          handlePrev={handlePrev}
          handleNext={handleNext}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 3 && <Complete />}
    </div>
  );
};

export default MarsVisitForm;
