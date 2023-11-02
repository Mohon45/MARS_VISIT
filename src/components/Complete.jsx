import completeImage from "../assets/Completed-bro.png";

const Complete = () => {
  return (
    <div>
      <img src={completeImage} alt="" className="w-[200px] mx-auto" />
      <h1 className="text-center text-xl font-semibold">
        Thanks For your Application!
      </h1>
      <p className="text-center my-10">
        Your Application SuccessFully Submited!
      </p>
    </div>
  );
};

export default Complete;
