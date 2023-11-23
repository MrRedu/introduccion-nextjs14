"use client";

export default function ErrorPage({error}: {error: Error}) {
  console.error(error); // eslint-disable-line no-console

  return <div>Something went wrong, try again!</div>;
}
