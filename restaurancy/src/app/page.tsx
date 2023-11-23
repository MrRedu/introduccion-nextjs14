import {redirect} from "next/navigation";

import api from "@/api";

export const revalidate = 100;

import {CardRestaurant} from "./components/CardRestaurant";
import SearchBox from "./components/SearchBox";

export default async function Home({searchParams}: {searchParams: {q: string}}) {
  const restaurants = await api.search(searchParams.q);

  async function searchAction(formData: FormData) {
    "use server";

    redirect(`/?q=${formData.get("query")}`);
  }

  return (
    <>
      {/* <SearchBox /> */}
      <form action={searchAction} className="mb-4 inline-flex gap-2">
        <input className="px-2" defaultValue={searchParams.q || ""} name="query" />
        <button className="bg-white/20 p-2" type="submit">
          Search
        </button>
      </form>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.length === 0 && <p>No restaurants found</p>}
        {restaurants.map((restaurant) => (
          <CardRestaurant
            key={restaurant.id}
            address={restaurant.address}
            description={restaurant.description}
            id={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
            ratings={restaurant.ratings}
            score={restaurant.score}
          />
        ))}
      </section>
    </>
  );
}
