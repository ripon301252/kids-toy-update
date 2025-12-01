import React from "react";
import SlideBanner from "./SlideBanner";
import ToyCard from "./ToyCard";
import { useToy } from "../Hook/usetoy";
import MeetOurCustomer from "./MeetOurCustomer";
import WhyCome from "./WhyCome";
import DeliveryServiceInfo from "./DeliveryServiceInfo";

const Home = () => {
  const { toys } = useToy();

  return (
    <div className="max-w-7xl mx-auto  pb-7">
      <title>KidsToy - Home</title>
      <SlideBanner />

      <h2 className="text-3xl text-white font-bold mt-20 mb-10 text-center">
        Popular Toys
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {toys.slice(0, 8).map((toy) => (
          <ToyCard key={toy.toyId} singleToy={toy} />
        ))}
      </div>
      <DeliveryServiceInfo></DeliveryServiceInfo>
      <WhyCome></WhyCome>
      <MeetOurCustomer></MeetOurCustomer>
    </div>
  );
};

export default Home;
