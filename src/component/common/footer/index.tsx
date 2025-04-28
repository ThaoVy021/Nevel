import { Layout, Typography } from "antd"
import FooterShape from "./footerShape"
import installapp from "../../../assets/installapp.png.png"

const { Text } = Typography

const aboutUsContent = [
  "Careers",
  "Company Details",
  "Terms & Conditions",
  "Help Center",
  "Privacy Policy",
  "Affiliate",
]

const productsContent = [
  "NFT Marketplace",
  "Slingshot",
  "Swaps",
  "NFT Launchpad",
  "Runes Platform",
  "Creator Dashboard",
]

const resourcesContent = [
  "Support",
  "API",
  "Feature Requests",
  "Trust & Safety",
  "Sitemap",
]

const Footer = () => {
  return (
    <Layout.Footer className="bg-black text-white py-10">
      <div className="container layout-container mx-auto flex flex-wrap pt-[40px] px-5">
        <FooterShape title="about us" content={aboutUsContent} />
        <FooterShape title="products" content={productsContent} />
        <FooterShape title="resources" content={resourcesContent} />

        <div className="footer-section flex flex-col gap-3 w-1/2 md:w-1/4 mb-6">
          <h4 className="text-white font-black text-lg italic uppercase">
            contact us
          </h4>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <Text>
                <a
                  href="mailto:support@tech.email"
                  className="text-sm font-normal !text-[#D2D2D2] hover:underline"
                >
                  support@tech.email
                </a>
              </Text>
            </li>
            <li>
              <Text>
                <a
                  href="mailto:affiliate@tech.com"
                  className="text-sm font-normal !text-[#D2D2D2] hover:underline"
                >
                  affiliate@tech.com
                </a>
              </Text>
            </li>
          </ul>
          <button className="mt-3">
            <img src={installapp} alt="installapp" />
          </button>
        </div>
      </div>
    </Layout.Footer>
  )
}

export default Footer
