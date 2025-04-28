import { Dropdown } from "antd"
import { useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "../../../assets/logo.svg.png"
import OpenMenu from "../../../assets/openMenu.png"
import CloseMenu from "../../../assets/closeMenu.png"
import Button from "../../button"
import "../../../App.scss"

const menuItems = [
  { label: "home", path: "/" },
  { label: "items1", path: "/items1" },
  { label: "items2", path: "/items2" },
  { label: "items3", path: "/items3" },
  { label: "items4", path: "/items4" },
]

export default function Header() {
  const location = useLocation()
  const { pathname } = location
  const dropdownRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag)
  }

  return (
    <header className="w-full flex justify-between items-center px-5 py-3 md:px-10 md:py-5 bg-primary-black shadow-md">
      <div className="flex items-center gap-4">
        {/* Mobile Dropdown */}
        <div className="flex lg:hidden">
          <Dropdown
            open={open}
            onOpenChange={handleOpenChange}
            overlayStyle={{
              width: "100vw",
              height: "100vh",
              left: 0,
              overflow: "hidden",
            }}
            dropdownRender={() => (
              <div
                ref={dropdownRef}
                className={`fixed left-0 top-[60px] md:top-[80px] w-full h-[calc(100vh-70px)] bg-primary-black gap-y-4 flex flex-col p-5 z-50 items-center dropdown-content ${
                  open ? "open" : ""
                }`}
              >
                {" "}
                {menuItems.map((item) => {
                  const isActive = pathname === item.path
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`py-3 w-full text-white items-center h-[48px] flex justify-center rounded-[100px] text-lg font-semibold hover:text-primary transition-colors ${
                        isActive ? " bg-[#383A42] !text-primary" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            )}
            trigger={["click"]}
          >
            <div className="relative">
              {open ? (
                <img
                  src={CloseMenu}
                  alt="Close menu"
                  className="min-w-6 w-6 min-h-6 h-6 cursor-pointer"
                />
              ) : (
                <img
                  src={OpenMenu}
                  alt="Open menu"
                  className="min-w-6 w-6 min-h-[19px] h-[19px] cursor-pointer"
                />
              )}
            </div>
          </Dropdown>
        </div>

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="min-h-[36px] min-w-[71px] h-[36px] w-auto md:h-[39px] md:w-[71px] object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-8 ml-10">
          {menuItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center h-10 py-3 text-sm uppercase font-medium transition-colors border-b md:border-none ${
                  isActive
                    ? "bg-[#383A42] text-primary px-[18px] py-2.5 rounded-[100px] hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <Button>Sign Up</Button>
        <Button secondary>Log In</Button>
      </div>
    </header>
  )
}
