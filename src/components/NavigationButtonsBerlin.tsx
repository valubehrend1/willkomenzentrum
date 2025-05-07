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
        <li style={{ width: '100%' }}>
          <button onClick={handleButtonClick}
            type="button" className="button button--light button--fulltone" style={{ width: '100%' }}>
            Überblick
          </button>
          {isOpen && <Uberblick />}
        </li>
        <li style={{ width: '100%' }}>
          <button type="button" className="button button--light" style={{ width: '100%' }}>
            Unterlagen
          </button>
        </li>
        <li style={{ width: '100%' }}>
          <button type="button" className="button button--light" style={{ width: '100%' }}>
            Beratung
          </button>
        </li>
        <li style={{ width: '100%' }}>
          <button type="button" className="button button--light" style={{ width: '100%' }}>
            Videos
          </button>
        </li>
        <li style={{ width: '100%' }}>
          <button type="button" className="button" style={{ width: '100%' }}>
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
