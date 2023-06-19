"use client";

import React, { useEffect, useState } from "react";
import {
  CarCardComponent,
  CustomFilterComponent,
  HeroComponent,
  SearchBarComponent,
  ShowMoreComponent,
} from "../components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(true);

  //  search state
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //  filter state
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  //  pagination state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        fuel: fuel || "",
        year: year || 2022,
        limit: limit || 10,
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  return (
    <main className="overflow-hidden">
      <HeroComponent />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className=" text-3xl md:text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBarComponent
            setManufacturer={setManufacturer}
            setModel={setModel}
          />
          <div className="home__filter-container">
            <CustomFilterComponent
              title="fuel"
              options={fuels}
              setFilter={setFuel}
            />
            <CustomFilterComponent
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {loading && (
          <div className="mt-16 w-full flex-center">
            <h2 className="text-xl font-bold text-black">Loading...</h2>
          </div>
        )}
        {!loading && allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCardComponent car={car} key={index} />
              ))}
            </div>
            <ShowMoreComponent
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          !loading && (
            <div className="home__error-container">
              <h2 className="text-xl font-bold text-black">Oops no results!</h2>
            </div>
          )
        )}
      </div>
    </main>
  );
}
