import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="bg-white max-w-screen-2xl m-auto ">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="#" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-500 p-2 border rounded text-white mr-3 hover:scale-90 hover:duration-500">
                Sign in
              </button>
              <button className="p-2 border rounded text-black hover:scale-90 hover:duration-500">
                Sign up
              </button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-br from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white font-bold mb-2 text-2xl">
                Find your table for any occasion
              </h1>
            </div>
          </div>
          {/* HEADER */}
        </main>
      </main>
    </main>
  );
}
