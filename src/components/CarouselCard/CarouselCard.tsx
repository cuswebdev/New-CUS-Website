import React, { FunctionComponent } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./CarouselCard.scss";
import { Box } from "@chakra-ui/react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

interface CarouselCardProps {}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowCircleRight
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowCircleLeft
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    />
  );
}

export const CarouselCard: FunctionComponent<CarouselCardProps> = ({
  children,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="carousel-card-wrapper">
      <Slider {...settings} className="carousel-card">
        {children &&
          React.Children.map(children, (child) => (
            <Box
              height="100%"
              px={6}
              pb={{ base: 8, md: 16 }}
              pt={2}
              className="carousel-card__box"
            >
              {child}
            </Box>
          ))}
      </Slider>
    </div>
  );
};
