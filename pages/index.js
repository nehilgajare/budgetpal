import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Axios from "axios";
import cors from "cors";
import { redirect } from "next/dist/server/api-utils";
import Error from "./components/Error";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "connect.sid=s%3AqlW8k0RPDWH8NXAS4T0eTToHm36O_xoe.Q7DERgjMRzrntK9AOHOwN9wenPAMdKtmsw7W%2FDFMAUk"
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://api-budgetpal.onrender.com/login", requestOptions)
      .then((response) => {
        setModalShow(false);
      })
      .then((result) => console.log(result))
      .catch((error) => {
        setModalShow(true);
        setError(error);
      });
  };
  return (
    <>
      <div className="bg-backg">
        <Navbar />
        <div className="flex mt-24  pb-24 ">
          <div className="flex-initial m-auto w-35vh h-40vh ">
            <div className="container opacity-95 py-12 px-12 my-auto rounded-lg bg-slate-200">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800">Budget Pal</h1>
                <p className="text-gray-500">Log in or create an account</p>
                <br />
              </div>

              <div className="bg-white  container shadow-md rounded px-8 py-8 mb-2 ">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 ml-14 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <hr className="my-4" />

                <p className="text-center text-gray-500 text-sm">
                  Don t have an account? <strong>Sign Up!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
