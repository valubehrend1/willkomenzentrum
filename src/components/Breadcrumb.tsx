import React from 'react';

const Breadcrumb: React.FC = () => {

    return (
        <div id="layout-grid__area--contentheader">
            <div id="content-header">
                {/* breadcrumb.view */}
                <nav className="breadcrumb" aria-label="Sie befinden sich hier">
                    <ol>
                        <li className="odd pos0">
                            <a href="https://support.berlin.de/" className="homehaus">
                                Startseite
                            </a>
                        </li>
                        <li className="even pos1">
                            <a href="https://support.berlin.de/designsystem/">
                                Aufenthalt
                            </a>
                        </li>
                        <li className="odd pos2">
                            <a href="https://support.berlin.de/designsystem/auftritte/">
                                Einbürgerung
                            </a>
                        </li>
                    </ol>
                </nav>
                {/* /breadcrumb.view */}
            </div>
        </div>
    );
};

export default Breadcrumb;
