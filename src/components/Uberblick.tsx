import React from 'react';
import CollapsiblePanel from './CollapsiblePanel';

const Uberblick: React.FC = () => {
    return (
        <div>
            <h1>Überblick zur Einbürgerung</h1>
            <p>Du möchtest die deutsche Staatsbürgerschaft beantragen? Wir helfen dir dabei. Hier bekommst du nützliche Tipps für eine Einbürgerung in Berlin. Du hast Fragen zum Online-Antrag? Du willst wissen, welche Unterlagen du dafür brauchst? Du suchst eine persönliche Beratung? Los geht’s!</p>
            <div style={{ backgroundColor: '#F0F6F1', width: '100%', padding: '24px 32px 32px 32px' }}>
                <h3>Welche Behörde ist zuständig?</h3>
                <p>Das Landesamt für Einwanderung (LEA) ist zuständig für die Einbürgerung in Berlin. Sie entscheiden über deinen Antrag. </p>
                <a href="#">Mehr info</a>
            </div>
            <div style={{ marginTop: '24px' }}>
                <CollapsiblePanel />
            </div>
        </div>
    );
};

export default Uberblick;