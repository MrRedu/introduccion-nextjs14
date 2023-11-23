import api from "@/api";

import {CardRestaurant} from "../components/CardRestaurant";

// Función para generar metadatos de información específica  con datos de un fetch
export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  };
}

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  return (
    <CardRestaurant
      address={restaurant.address}
      description={restaurant.description}
      id={restaurant.id}
      image={restaurant.image}
      name={restaurant.name}
      ratings={restaurant.ratings}
      score={restaurant.score}
    />
  );
}
