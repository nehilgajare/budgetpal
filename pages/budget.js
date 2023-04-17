import React from "react";
import Sidebar from "./components/sidebar";
import { Chart } from "chart.js/auto";
import BarChart from "./components/barchart";
import PieChart from "./components/piechart";

export default function Budget() {
    
    return (
        <div>
            {/* <Sidebar/> */}
            <div className="grid grid-cols-4 gap-3">
                <div className="lg:h-screen bg-gray-800">
                    <form className="px-8 pt-16">
                        <label className="block text-white font-bold mb-2" for="title">
                            Title
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Title"
                        />
                        <label className="block text-white font-bold mb-2" for="category">
                            Category
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="category"
                            type="text"
                            placeholder="Category"
                        />
                        <label className="block text-white font-bold mb-2" for="exp">
                            Expense
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="exp"
                            type="number"
                            placeholder="Expense"
                        />
                        <button
                            className="bg-gray-500 hover:bg-blue-700 mt-3 mr-16 ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"

                        >
                            Add Expense
                        </button>
                    </form>

                </div>
                <div className="flex-wrap col-span-3">

                    <BarChart />
                    <PieChart/>
                </div>

            </div>
        </div>
    )
}