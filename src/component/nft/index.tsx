import NftCarousel from "./nftCarousel"
import NFT1 from "../../assets/nft/NewNFT1.png"
import NFT2 from "../../assets/nft/NewNFT2.png"
import NFT3 from "../../assets/nft/NewNFT3.png"
import NFT4 from "../../assets/nft/NewNFT4.png"
import NFT5 from "../../assets/nft/NewNFT5.png"
import NFT6 from "../../assets/nft/NewNFT6.png"
import NFTDrops from "../../assets/nft/NFTDrops.png"
import hotNFT from "../../assets/nft/hotNFT.png"
import promotion from "../../assets/nft/promotion.png"
import { Col, Row } from "antd"

const newNFTImages = [NFT1, NFT2, NFT3, NFT4, NFT5, NFT6]
const dropsNFTImages = [NFTDrops]
const hotNFTImages = [hotNFT]
const promotionNFTImages = [promotion]

export default function Nft() {
  return (
    <div className="bg-black border-b border-[#1F2023]">
      <div className="max-w-full container layout-container">
        <div>
          <NftCarousel
            nftImages={newNFTImages}
            slidesToShow={6}
            showButton={true}
            heightImageDesktop="245px"
            heightImageMobile="140px"
            title="New NFT Collections"
          />
        </div>
        <Row className="mb-[40px] md:mb-[80px] w-full">
          <Col md={24} lg={12} className="w-full">
            <NftCarousel
              nftImages={dropsNFTImages}
              slidesToShow={1}
              showButton={true}
              heightImageDesktop="240px"
              heightImageMobile="171px"
              title="NFT Drops Calendar"
              imgClassName="object-left-top"
            />
          </Col>
          <Col md={24} lg={12} className="w-full">
            <Row className="flex ">
              <Col xs={12} md={12} lg={12} className="w-full">
                <NftCarousel
                  nftImages={hotNFTImages}
                  slidesToShow={1}
                  showButton={false}
                  heightImageDesktop="240px"
                  heightImageMobile="167px"
                  title="Hot NFT"
                  className="pr-[8px] md:pl-0 md:pr-[12px]"
                />
              </Col>
              <Col xs={12} md={12} lg={12} className="w-full">
                <NftCarousel
                  nftImages={promotionNFTImages}
                  slidesToShow={1}
                  heightImageDesktop="240px"
                  heightImageMobile="167px"
                  showButton={false}
                  title="Promotion"
                  className="pl-[8px] md:pl-[12px]"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}
