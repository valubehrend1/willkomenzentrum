import React from "react";
import Uberblick from "@/components/Uberblick";
import '../../public/styles/navigation-buttons.css'


interface NavigationButtonsBerlinProps {
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  isDesktop: boolean;
}

const NavigationButtonsBerlin: React.FC<NavigationButtonsBerlinProps> = ({ handleButtonClick, isOpen, isDesktop }) => {
  return (
    <nav className="navigation-buttons">
      <ul className="button-list-container">
        <li className='list-item'>
          <button
            onClick={handleButtonClick}
            type="button"
            className="button button--light button--fulltone menu arrow">
            Überblick
          </button>
          {isOpen && !isDesktop && <Uberblick />}
        </li>
        <li className="list-item">
          <button
            type="button"
            className="button button--light menu arrow">
            Unterlagen
          </button>
        </li>
        <li className="list-item">
          <button
            type="button"
            className="button button--light menu arrow">
            Beratung
          </button>
        </li>
        <li className="list-item">
          <button
            type="button"
            className="button button--light menu arrow">
            Videos
          </button>
        </li>
        <li className="list-item">
          <button
            type="button"
            className="button arrow">
            Online beantragen
            <span className="icon">
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationButtonsBerlin;
