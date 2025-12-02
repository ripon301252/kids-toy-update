import React from "react";


const heroes = [
  {
    name: "Sadia Rahman",
    role: "Adopted Bella (Golden Retriever)",
    img: "https://i.ibb.co.com/V0gC0QHF/w1.jpg",
  },
  {
    name: "Rafiul Hasan",
    role: "Rescued Milo the Cat",
    img: "https://i.ibb.co.com/BHBWRJHr/m2.jpg",
  },
  {
    name: "Jannat Ara",
    role: "Volunteer & Pet Foster",
    img: "https://i.ibb.co.com/SwmHZ92w/w2.jpg",
  },
  {
    name: "Kamal Uddin",
    role: "Adopted Max (German Shepherd)",
    img: "https://i.ibb.co.com/hFByx6V1/m1.jpg",
  },
];

const MeetOurCustomer = () => {
  return (
    <section className="my-20 text-center px-4 ">
      <h2 className="text-4xl font-bold text-white mb-10">
        Meet Our Customer
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {heroes.map((hero, i) => (
          <div
            key={i}
            className="rounded-xl shadow hover:shadow-md transition-all p-4 backdrop-blur-lg bg-white/10"
          >
            <img
              src={hero.img}
              alt={hero.name}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105"
            />
            <h3 className="text-lg font-semibold text-white">{hero.name}</h3>
            <p className="text-sm text-white">{hero.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurCustomer;
