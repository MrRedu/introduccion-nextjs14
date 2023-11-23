export function FavoriteButton({id, handleClick}: {id: string; handleClick: () => void}) {
  const isFavourite = window.localStorage.getItem("favorites")?.includes(id);

  return (
    <button
      className={`text-xl text-red-500 ${isFavourite ? "opacity-100" : "opacity-20"}`}
      type="button"
      onClick={handleClick}
    >
      ♥
    </button>
  );
}
