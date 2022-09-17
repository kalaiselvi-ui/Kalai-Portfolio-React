import React from "react";
import portfolioData from "./PortfolioData";
import Slider from "react-slick";
import PortfolioCard from "./PortfolioCard";
import "./portfolio.css";

const Portfolio = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="portfolio-info">
        <h3>Portfolio</h3>
        <span>LOOK AT MY PROJECTS</span>
      </div>

      <Slider {...sliderSettings}>
        {portfolioData.map((portfolio, idx) => (
          <PortfolioCard
            key={idx}
            image={portfolio.imageSrc}
            title={portfolio.title}
            desc={portfolio.description}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
