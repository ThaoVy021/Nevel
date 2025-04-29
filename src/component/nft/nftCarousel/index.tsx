import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import Previous from "../../../assets/Previous.svg"
import Next from "../../../assets/Next.svg"

interface NftProps {
  title: string
  nftImages: string[]
  heightImageDesktop: string
  heightImageMobile: string
  className?: string
  slidesToShow?: number
  showButton?: boolean
  imgClassName?: string
}

const NftCarousel = ({
  title,
  nftImages,
  heightImageDesktop,
  heightImageMobile,
  className,
  slidesToShow,
  showButton,
  imgClassName,
}: NftProps) => {
  const sliderRef = useRef<Slider>(null)

  // Get the width of the window to set the height of the image
  const [windowWidth, setWindowWidth] = useState(getWidth())

  function getWidth() {
    return window.innerWidth
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWidth())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const settings = {
    dots: false,
    infinite: nftImages.length >= (slidesToShow ?? 1),
    speed: 500,
    slidesToShow: Math.min(slidesToShow ?? 1, nftImages.length),
    slidesToScroll: 1,
    centerMode: false,
    autoplay: nftImages.length > 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: nftImages.length === 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(5, nftImages.length),
          slidesToScroll: 1,
          autoplay: nftImages.length > 5,
          infinite: nftImages.length > 5,
          fade: nftImages.length === 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(3.5, nftImages.length),
          slidesToScroll: 1,
          autoplay: nftImages.length > 3,
          infinite: nftImages.length > 3,
          fade: nftImages.length === 1,
        },
      },
    ],
  }

  return (
    <div
      className={`bg-black pt-10 md:pt-20 pb-0 px-5 relative w-full ${className}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-primary text-[24px] leading-[32px] md:text-[32px] md:leading-[48px] italic font-black uppercase">
          {title}
        </h2>
        {showButton && (
          <div className="flex gap-2">
            <button
              className="rounded"
              onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
            >
              <img
                src={Previous}
                alt="Previous button"
                className="h-[32px] md:h-[40px]"
              />
            </button>

            <button
              className="rounded"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <img
                src={Next}
                alt="Next button"
                className="h-[32px] md:h-[40px]"
              />
            </button>
          </div>
        )}
      </div>
      <Slider ref={sliderRef} {...settings}>
        {nftImages.map((image, index) => (
          <div key={index} className="px-1 md:px-2">
            <img
              src={image}
              alt={`NFT ${index + 1}`}
              className={`rounded-[12px] shadow-lg w-full object-cover overflow-hidden ${imgClassName}`}
              style={{
                height:
                  // Can't use the `h-` class here because of the dynamic height
                  windowWidth <= 768 ? heightImageMobile : heightImageDesktop,
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default NftCarousel
