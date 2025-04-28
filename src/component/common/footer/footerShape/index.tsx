import { Typography } from "antd"

interface FooterShapeProps {
  title: string
  content: string[]
}

const { Text } = Typography

const FooterShape = ({ title, content }: FooterShapeProps) => {
  return (
    <div className="footer-section flex flex-col gap-3 w-1/2 md:w-1/4 mb-6">
      <h4 className="text-white font-black text-lg italic uppercase">
        {title}
      </h4>
      <ul className="list-none flex flex-col gap-2">
        {content.map((item) => (
          <li key={item}>
            <Text>
              <a
                href="#"
                className="text-sm font-normal !text-[#D2D2D2] hover:underline"
              >
                {item}
              </a>
            </Text>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterShape
