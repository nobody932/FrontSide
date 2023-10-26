"use client";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const BurgerMenu = () => {
  const [hideMenu, setHideMenu] = useState(false);

  return (
    <>
      <Menu
        isOpen={hideMenu === true ? false : null}
        styles={styles}
        className="contain  text-center uppercase"
      >
        <div className="mt-8 mx-4 text-yellow-500 flex flex-col p-8">
          <div className="flex items-center justify-center pt-6">
            <img src="/image/LOGO-Portfolio.png" width={100} height={100} />
          </div>
          <div className="font-rubikRegular py-4 ">
            <h1> ALERTE /Haykel</h1>
            <h2>haykel93370@gmail.com</h2>
            <h2>06.51.60.56.52</h2>
          </div>
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="http://localhost:3000/">Accueil</a>
            </li>
            <li>
              <AnchorLink
                href="#about"
                offset={() => 100}
                onClick={() => setHideMenu(!hideMenu)}
              >
                Introduction
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#skills"
                offset={() => 100}
                onClick={() => setHideMenu(!hideMenu)}
              >
                Compétences
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#projects"
                offset={() => 100}
                onClick={() => setHideMenu(!hideMenu)}
              >
                Projets
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#timeline"
                offset={() => 100}
                onClick={() => setHideMenu(!hideMenu)}
              >
                Parcours
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#contact"
                offset={() => 450}
                onClick={() => setHideMenu(!hideMenu)}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </Menu>
    </>
  );
};
export default BurgerMenu;
