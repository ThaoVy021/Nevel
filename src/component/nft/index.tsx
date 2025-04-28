import NftCarousel from "./nftCarousel"
import { useEffect } from "react"
import NFT1 from "../../assets/nft/NewNFT1.png"
import NFT2 from "../../assets/nft/NewNFT2.png"
import NFT3 from "../../assets/nft/NewNFT3.png"
import NFT4 from "../../assets/nft/NewNFT4.png"
import NFT5 from "../../assets/nft/NewNFT5.png"
import NFT6 from "../../assets/nft/NewNFT6.png"
import NFTDrops from "../../assets/nft/NFTDrops.png"
import hotNFT from "../../assets/nft/hotNFT.png"
import promotion from "../../assets/nft/promotion.png"

const newNFTImages = [NFT1, NFT2, NFT3, NFT4, NFT5, NFT6]
const dropsNFTImages = [NFTDrops]
const hotNFTImages = [hotNFT]
const promotionNFTImages = [promotion]

export default function Nft() {
  useEffect(() => {
    setTimeout(() => {
      const slickTrack = document.querySelector(".slick-track")
      if (slickTrack) {
        ;(slickTrack as HTMLElement).style.transform =
          "translate3d(-1100px, 0px, 0px)"
      }
    }, 0)
  }, [])

  return (
    <div className="bg-black">
      <div className="max-w-full container layout-container border-b border-[#1F2023]">
        <div>
          {" "}
          <NftCarousel
            nftImages={newNFTImages}
            slidesToShow={6}
            showButton={true}
            heightImageDesktop="245px"
            heightImageMobile="140px"
            title="New NFT Collections"
          />
        </div>
        <div className="block md:flex justify-center items-center mb-[40px] md:mb-[80px]">
          <div className="flex flex-1 justify-center items-center ">
            <NftCarousel
              nftImages={dropsNFTImages}
              slidesToShow={1}
              showButton={true}
              heightImageDesktop="240px"
              heightImageMobile="171px"
              title="NFT Drops Calendar"
            />
          </div>
          <div className="flex flex-1 justify-center items-center ">
            <div className="flex flex-1 justify-center items-center w-full mr-[-24px]">
              <NftCarousel
                nftImages={hotNFTImages}
                slidesToShow={1}
                showButton={false}
                heightImageDesktop="240px"
                heightImageMobile="167px"
                title="Hot NFT"
              />
            </div>
            <div className="flex flex-1 justify-center items-center w-full">
              <NftCarousel
                nftImages={promotionNFTImages}
                slidesToShow={1}
                heightImageDesktop="240px"
                heightImageMobile="167px"
                showButton={false}
                title="Promotion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
