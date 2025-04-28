import Cashback from "../../assets/category/cashback.svgfill.png"
import Ranking from "../../assets/category/Race.png"
import Video from "../../assets/category/Video.png"
import HowToBuy from "../../assets/category/HowToBuy.png"
import News from "../../assets/category/New.png"
import Roadmaps from "../../assets/category/Roadmaps.svg.png"

const categories = [
  { label: "Free to Earn", icon: Cashback },
  { label: "Ranking", icon: Ranking },
  { label: "Video NFT", icon: Video },
  { label: "How to Buy", icon: HowToBuy },
  { label: "New NFTs", icon: News },
  { label: "Roadmaps", icon: Roadmaps },
]

export default function Categories() {
  return (
    <div className="bg-[#1F2023]">
      <div className="container layout-container ">
        <div className="flex justify-between px-5 py-4 gap-2 text-center md:py-6">
          {categories.map((category, index) => (
            <div
              className="flex flex-col items-center text-white cursor-pointer gap-2 md:gap-3 relative"
              key={index}
            >
              <img
                src={category.icon}
                alt={category.label}
                className="w-auto h-[28px] md:h-[42px] mb-1"
              />{" "}
              <span className="text-[10px] leading-[12px] break-words font-medium md:text-sm md:font-normal uppercase">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
