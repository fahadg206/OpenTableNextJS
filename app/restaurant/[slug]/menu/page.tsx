import { PrismaClient } from "@prisma/client";
import NavBar from "../components/NavBar";
import MenuCard from "./components/MenuCard";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) throw new Error();

  return restaurant.items;
};

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchRestaurantMenu(params.slug);
  console.log(menu);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <NavBar slug={params.slug} />
        <MenuCard menu={menu} />
      </div>
    </>
  );
}
