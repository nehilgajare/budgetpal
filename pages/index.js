import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-light">
        <Navbar />
        <div className="flex mt-24  pb-24 ">
          <div className="flex-initial m-auto w-35vh h-40vh ">
            <div className="container shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] float-left py-12 px-12 my-auto rounded-lg bg-slate-200">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800">Budget Pal</h1>
                <p className="text-gray-500">Log in or create an account</p>
                <br />
              </div>

              <div className="bg-white container shadow-md rounded px-8 py-8 mb-2 ">
                <form>
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
                      type="email"
                      placeholder="Email"
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
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
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
