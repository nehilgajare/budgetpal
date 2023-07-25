import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Axios from "axios";
import cors from "cors";
import { redirect } from "next/dist/server/api-utils";
import Error from "./components/Error";
import backgroundImage from '../public/backg.jpeg';
import Link from "next/link";
 
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
      <div
        className="bg-auto bg-backg m-auto h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <div className="flex my-auto mt-12 pb-24 ">
          <div className="flex m-auto w-35vh h-10vh ">
            <div className="container opacity-95 lg:py-10 lg:px-12  px-4 py-6 my-auto rounded-lg bg-slate-200">
              <div className="text-center">
                <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-gray-800">Budget Pal</h1>
                <p className="text-gray-500">Log in or create an account</p>
                <br />
              </div>

              <div className="bg-white  container shadow-md rounded lg:px-8 lg:py-8 md:px-4 md:py-6 px-4 py-4  mb-2 ">
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
                      className="bg-blue-500 ml-14 hover:bg-blue-700 text-white font-bold lg:py-2 lg:px-4 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <hr className="my-4" />

                <p className="text-center text-gray-500 text-sm">
                  Don t have an account? <Link href="/signup">Sign Up!</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
