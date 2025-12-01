import React from "react";
import { useToy } from "../Hook/usetoy";
// import { Link } from "react-router";
import AllToyCard from "./AllToyCard";

export default function AllItems() {
  const { toys } = useToy();
  console.log(toys);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mt-10 mb-10 text-center text-white">
          All Items
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {toys.map((toy) => (
            <AllToyCard key={toy.toyId} singleToy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
}
