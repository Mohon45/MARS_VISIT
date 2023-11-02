import "./Loader.css";
import Logo from "../../../assets/logo.png";

const Loader = (props) => {
  return (
    <div
      className={`flex justify-center bg-[#C3F4E1] items-center fixed top-0 left-0 right-0 bottom-0 z-50`}
      style={{
        opacity: props.forProcess ? 0.7 : 1,
      }}
    >
      <div className="h-[100px] w-[100px] fade-in-out">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Loader;
