/* eslint-disable no-unused-vars */
import { ToastContainer } from "react-toastify";
import "./App.css";
import MarsVisitForm from "./pages/MarsVisitForm";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <div className="w-[70%] mx-auto my-6 bg-gradient-to-r from-[#C3F4E1]  to-[#F4E8E4] rounded-md p-5 shadow-xl">
        <h1 className="text-center text-xl font-semibold">
          MARS VISIT APPLICATION FORM
        </h1>
        <MarsVisitForm />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={10000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;
