import { useState } from "react";

import {
  Hero,
  Services,
  TourList,
  Pagination,
  Sort,
  Banner,
  NewsLetter,
} from "../../components";

import { toursList } from "../../data";


const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState("recommended");

  const TOURS_PER_PAGE = 3;

  const pages = Math.ceil(toursList.length / TOURS_PER_PAGE);
  const startIndex = (currentPage - 1) * TOURS_PER_PAGE;
  const endIndex = currentPage * TOURS_PER_PAGE;

  // Sort tour

  const sortTourList =
    sortItem === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === "high"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);

  const orderdTourList = sortTourList.slice(startIndex, endIndex);

  return (
    <div>
      <Hero />
      <Services />
      <Sort
        toursLength={toursList.length}
        sortItem={sortItem}
        setSortItem={setSortItem}
      />
      <TourList toursList={orderdTourList} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
    </div>
  );
};

export default Home;
