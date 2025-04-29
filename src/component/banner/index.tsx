import React from "react"
import { Carousel } from "antd"
import banner from "../../assets/banner.png"
import "../../App.scss"

const Banner: React.FC = () => {
  const banners = new Array(9).fill(banner)

  return (
    <Carousel autoplay autoplaySpeed={23000}>
      {banners.map((banner, index) => (
        <div
          key={index}
          className="carousel-image-container flex justify-center items-center overflow-hidden"
        >
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="h-[180px] md:h-[450px] w-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  )
}

export default Banner
