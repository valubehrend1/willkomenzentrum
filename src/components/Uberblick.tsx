import React from 'react';
import CollapsiblePanel from './CollapsiblePanel';
import '../../public/styles/uberblick.css'

interface UberblickProps {
  isDesktop?: boolean;
}

const Uberblick: React.FC<UberblickProps> = ({ isDesktop }) => {
    return (
        <div>
            <h1 className={isDesktop ? 'uberblick-title-desktop' : 'uberblick-title-mobile'}>Überblick zur Einbürgerung</h1>
            <p>Du möchtest die deutsche Staatsbürgerschaft beantragen? Wir helfen dir dabei. Hier bekommst du nützliche Tipps für eine Einbürgerung in Berlin. Du hast Fragen zum Online-Antrag? Du willst wissen, welche Unterlagen du dafür brauchst? Du suchst eine persönliche Beratung? Los geht's!</p>
            <div className='paragraph-container'>
                <h3>Welche Behörde ist zuständig?</h3>
                <p>Das Landesamt für Einwanderung (LEA) ist zuständig für die Einbürgerung in Berlin. Sie entscheiden über deinen Antrag. </p>
                <a href="#">Mehr info</a>
            </div>
            <div className='collapsible-panel-container'>
                <CollapsiblePanel />
            </div>
        </div>
    );
};

export default Uberblick;