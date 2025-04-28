import banner from "../../assets/banner.png"

export default function Banner() {
  return (
    <div className="max-w-full">
      <img
        src={banner}
        alt="Banner Nevel"
        className="h-auto w-full object-contain"
      />
    </div>
  )
}
