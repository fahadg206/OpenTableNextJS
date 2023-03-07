import { PrismaClient } from "@prisma/client";
import Images from "./components/Images";
import NavBar from "./components/NavBar";
import ReservationCard from "./components/ReservationCard";
import RestaurantDescription from "./components/RestaurantDescription";
import RestaurantRating from "./components/RestaurantRating";
import RestaurantTitle from "./components/RestaurantTitle";
import Reviews from "./components/Reviews";

export interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) throw new Error();

  return restaurant;
};
export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  console.log({ restaurant });
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <NavBar slug={restaurant.slug} />
        <RestaurantTitle name={restaurant.name} />
        <RestaurantRating />
        <RestaurantDescription description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}
