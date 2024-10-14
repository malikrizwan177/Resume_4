import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact Me", link: "#contact" },
    { name: "Resume", link: "#resume" },
  ];
  return (
    <header>
      <nav className="flex flex-row justify-between md:justify-center items-center px-8 lg:px-32 py-5 bg-primary text-[18px] md:relative">
        <a
          href="/"
          className="text-secondary cursor-pointer md:absolute left-0 flex float-start md:ml-8 lg:ml-32 font-medium"
        >
          PORT<p className="text-white">folio</p>
        </a>
        <div className="hidden md:flex lg:gap-10 md:gap-5 justify-start items-center">
          {navItems.map((items, index) => (
            <a
              key={index}
              onClick={() => items.link === "#resume" ? window.open('./src/assets/resume/CV_main.pdf', "_blank"): null}
              href={items.link}
              className="hover:text-secondary cursor-pointer"
            >
              {items.name}
            </a>
          ))}
        </div>
        <div className="flex md:hidden relative">
          <img
            src={mobileMenuOpen ? "./icons/cancel.png" : "./icons/menu-bar.png"}
            alt="menubar"
            className="h-8 w-8 bg-white rounded-full cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
          {mobileMenuOpen && (
            <div className="absolute flex flex-col background-gradient border border-gray-500 rounded-md w-[130px] shadow-lg duration-300 right-0 top-10 p-3">
              {navItems.map((items, index) => (
                <a
                  key={index}
                  href={items.link}
                  className="hover:text-secondary cursor-pointer"
                >
                  {items.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
