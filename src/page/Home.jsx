import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AdminHome from "../components/AdminHome";

const Home = () => {
  return (
    <div>
      {/* <h1 className='text-4xl'>{`Welcome to Home ${user?.name}`}</h1>
            <button type='submit' className='text-3xl bg-slate-500 rounded-md p-3 mt-5' onClick={logout}>Logout</button> */}
      {/* <Header/>
            <Sidebar/>
            <AdminHome/> */}

      <div className="bg-[#1d2634] h-cal-[100vh-60px]">
        <Header />
        <div className="flex">
          <Sidebar />
          <AdminHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
