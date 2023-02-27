import Images from "./components/Images";
import NavBar from "./components/NavBar";
import ReservationCard from "./components/ReservationCard";
import RestaurantDescription from "./components/RestaurantDescription";
import RestaurantRating from "./components/RestaurantRating";
import RestaurantTitle from "./components/RestaurantTitle";
import Reviews from "./components/Reviews";
export default function RestaurantDetails() {
  return (
    <>
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
    </>
  );
}
