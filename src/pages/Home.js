import React from "react";
import Search from "../components/Home/Search";
import Category from "../components/Home/Category";
import FeaturePlace from "../components/Home/FeaturedPlace";
import MainCategory from "../components/Home/MainCategory";
import AddListing from "../components/Home/AddListing";
function Home() {
  return (
    <div>
      <Search />
      <Category />
      <FeaturePlace />
      <MainCategory />
      <AddListing />
    </div>
  );
}

export default Home;
