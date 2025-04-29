import { Menu } from "antd"
import { useState } from "react"
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

  const [open, setOpen] = useState(false)

  return (
    <header className="w-full flex justify-between items-center px-5 py-3 md:px-10 md:py-5 bg-black shadow-md">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-xl"
          aria-label="Toggle menu"
        >
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
              className="min-w-6 w-6 min-h-6 h-6 cursor-pointer"
            />
          )}
        </button>

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="min-h-[36px] min-w-[71px] h-[36px] w-auto md:h-[39px] md:w-[71px] object-contain"
          />
        </Link>

        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          className="hidden lg:flex items-center gap-2 ml-10 bg-transparent custom-ant-menu"
        >
          {menuItems.map((item) => {
            return (
              <Menu.Item key={item.path}>
                <Link
                  to={item.path}
                  className={`h-10 text-sm uppercase font-medium`}
                >
                  {item.label}
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </div>

      {open && (
        <div className="fixed inset-0 top-14 bg-primary-black z-40 flex flex-col animate-slide-left-menu px-5">
          <Menu
            mode="vertical"
            selectedKeys={[pathname]}
            className="flex flex-col border-none gap-4 custom-ant-menu bg-transparent custom-ant-menu"
          >
            {menuItems.map((item, index) => {
              return (
                <Menu.Item
                  key={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-center ${index === 0 ? "!mt-1" : ""}`}
                  style={{ marginInline: 0, marginBlock: 0 }}
                >
                  <Link
                    to={item.path}
                    className={`h-10 text-sm uppercase font-medium`}
                  >
                    {item.label}
                  </Link>
                </Menu.Item>
              )
            })}
          </Menu>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button>Sign Up</Button>
        <Button secondary>Log In</Button>
      </div>
    </header>
  )
}
