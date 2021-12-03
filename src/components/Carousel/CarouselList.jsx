import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselItem from "./CarouselItem";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const GeekossList = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/banners`)
      .then((response) => response.data)
      .then((data) => setBanners(data));
  }, []);

  return (
    <section>
      {banners.map((item) => (
        <CarouselItem
          key={item.id}
          id={item.id}
          url_img={item.url_img}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default GeekossList;
