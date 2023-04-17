import React from "react";

export default function SignUp() {
    return (
        <div>
            <h1 className="text-3xl text-center mt-2 font-bold underline">
                Budget Pal
            </h1>
            <div className='flex mt-48 '> 

                <div className="flex-initial m-auto w-35vh h-40vh ">
                    <div className="max-w-md mx-auto py-12 bg-slate-300">

                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800">Budget</h1>
                            <p className="text-gray-500">Log in or create an account</p>
                        </div>

                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-6">
                            <form>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" for="email">
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
                                    <label className="block text-gray-700 font-bold mb-2" for="password">
                                        Password
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" for="cpassword">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="cpassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"

                                    >
                                        Sign Up
                                    </button>


                                </div>
                            </form>
                            <hr className="my-4" />

                            <p className="text-center text-gray-500 text-sm">
                                Already have an account? <a  href='/' className="text-blue-500 hover:text-blue-800 font-bold">Log In</a>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="flex-initial m-auto w-50% h-64 bg-purple-600">

                    02
                </div>
            </div>
        </div>
    )

};