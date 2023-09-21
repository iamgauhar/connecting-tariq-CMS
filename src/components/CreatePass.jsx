import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoginContext } from "../../context/loginContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../utils/apiUrl";

const CreatePass = () => {
  const { newPassword, setNewPassword, repeatPassword, setRepeatPassword } = useLoginContext();

  const { userId, token } = useParams()

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    theme: 'colored',
    draggable: true,
  };

  const navigate = useNavigate()
  const passwordHandler = async (e) => {
    e.preventDefault()
    console.log(userId, token)
    console.log(newPassword, repeatPassword)

    if (newPassword !== repeatPassword) {
      return;

    }

    const response = await fetch(`${resetPassword}/${userId}/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({ password: newPassword })


    })
    const data = await response.json()
    if (data.success) {

      toast.success(data.message, toastOptions);


      setTimeout(() => {

        navigate("/login")
      }, 5000);
    }

    console.log(data)

  }
  return (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] py-8 px-3 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="py-8 px-3 w-[600px]">
          <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold">Create New Password</h1>

          <form onSubmit={passwordHandler}>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Password</label>
              <input
                type="password"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="mt-10 pl-1 flex flex-col">
              <label>Confirm Password</label>
              <input
                type="password"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
            <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90">
              Create
            </button>
            <span className="font-semibold ml-10 hover:text-violet-300 hover:text-2xl hover:transition-all hover:underline">
              <Link to="/forgetPassword">Back</Link>
            </span>
          </form>
        </div>
      </div>
      <div
        className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
        style={{
          //   backgroundImage: `${sideBanner}`,
        }}
      >
        {/* <img src={sideBanner} alt="" /> */}
      </div>
      <ToastContainer />
    </main>
  );
};

export default CreatePass;
