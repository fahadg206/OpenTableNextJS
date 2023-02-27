import NavBar from "../components/NavBar";
import MenuCard from "./components/MenuCard";
export default function RestaurantMenu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <NavBar />
        <MenuCard />
      </div>
    </>
  );
}
