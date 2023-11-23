"use client";

import type {Restaurant} from "@/types";

import Link from "next/link";
import dynamic from "next/dynamic";

import {FavoriteButton} from "./FavoriteButton";

const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {ssr: false});

export function CardRestaurant({
  id,
  name,
  image,
  score,
  ratings,
  description,
}: Restaurant): JSX.Element {
  function handleClick() {
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(window.localStorage.getItem("favorites") || "[]");

      window.localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
    }
  }

  return (
    <article key={id}>
      <img alt={name} className="mb-3 h-[300px] w-full object-cover" src={image} />
      <h2 className="inline-flex items-center gap-2 text-lg font-bold">
        <Link href={`/${id}`}>
          <span>{name}</span>
        </Link>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{score}</span>
          <span className="font-normal opacity-75">({ratings})</span>
        </small>
        <DynamicFavoriteButton handleClick={handleClick} id={id} />
      </h2>
      <p className="opacity-90">{description}</p>
    </article>
  );
}
