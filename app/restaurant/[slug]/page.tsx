import Link from "next/link";
import Navbar from "../../components/NavBar";
import Header from "./components/Header";
import Images from "./components/Images";
import NavBar from "./components/NavBar";
import ReservationCard from "./components/ReservationCard";
import RestaurantDescription from "./components/RestaurantDescription";
import RestaurantRating from "./components/RestaurantRating";
import RestaurantTitle from "./components/RestaurantTitle";
import Reviews from "./components/Reviews";
export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <NavBar />
            <RestaurantTitle />
            <RestaurantRating />
            <RestaurantDescription />
            <Images />
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
}
