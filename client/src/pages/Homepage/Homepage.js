import React from "react";
import Hero from "../../components/hero/Hero";
import ShowcaseProducts from "../../components/showcase-product/ShowcaseProducts";
import ShowcaseCollection from "../../components/showcase-cllection/ShowcaseCollection";
import Features from "../../components/features/Features";

const Homepage = () => (
  <>
    <Hero />
    <ShowcaseProducts />
    <ShowcaseCollection />
    <Features />
  </>
);

export default Homepage;
