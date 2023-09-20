import React from "react";
// import sideBanner from "../assets/login-banner.jpg";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/loginContext";

const ForgetPass = () => {
  const {verifyEmail,setVerifyEmail} = useLoginContext()
  return (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] py-8 px-3 md:p-14 flex items-center justify-center">
        <div className="py-8 px-3 w-[600px]">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Enter Your Email
          </h1>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Email</label>
              <input
                type="text"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                value={verifyEmail}
                onChange={(e) => setVerifyEmail(e.target.value)}
              />
            </div>

            <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90">
              <Link to="/createPassword">Send</Link>
            </button>
            <span className="font-semibold ml-10 hover:text-violet-300 hover:text-2xl hover:transition-all hover:underline">
              <Link to="/">Back</Link>
            </span>
          </form>
        </div>
      </div>
      <div
        className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
        style={
          {
            //   backgroundImage: `../assets/login-banner.jpg`,
          }
        }
      >
        {/* <img src={sideBanner} alt="" /> */}
      </div>
    </main>
  );
};

export default ForgetPass;
