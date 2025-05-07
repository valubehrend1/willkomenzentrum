import React from "react";
import Uberblick from "@/components/Uberblick";

interface NavigationButtonsBerlinProps {
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
}

const NavigationButtonsBerlin: React.FC<NavigationButtonsBerlinProps> = ({ handleButtonClick, isOpen }) => {
  return (
    <nav className="navigation-buttons">
      <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
        <li className='button-list'>
          <button onClick={handleButtonClick}
            type="button" className="button button--light button--fulltone menu arrow">
            Überblick
          </button>
          {isOpen && <Uberblick />}
        </li>
        <li>
          <button type="button" className="button button--light menu arrow">
            Unterlagen
          </button>
        </li>
        <li>
          <button type="button" className="button button--light menu arrow">
            Beratung
          </button>
        </li>
        <li>
          <button type="button" className="button button--light menu arrow">
            Videos
          </button>
        </li>
        <li>
          <button type="button" className="button arrow">
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
