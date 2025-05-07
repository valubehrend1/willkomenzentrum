import berlinLogo from '../../public/assets/berlin-logo.png';
import '../../public/styles/header.css'

export default function HeaderBerlinFull() {
  return (
    <header id="header" className="kiekma">
      {/* Portallogo Berlin Brand */}
      <div className="header__row-portalbrand">
        <div className="logo">
          <a href="#">
            <img
              className="logo"
              title="Zur Startseite"
              src={berlinLogo}
              alt="Berlin.de"
            />
          </a>
        </div>
      </div>

      <div className="header__row-pageheader">
        {/* Vertical Logo */}
        <div className="pageheader__logo">
          <div className="logo">
            <div className="image__image">
              <a href="#" title="WillkommensZentrum">
              </a>
            </div>
          </div>
          <p className="textlogo">
            <a href="#" title="Zur Startseite">
              <span className="title">Willkommenszentrum</span>
            </a>
          </p>
        </div>

        {/* Service Buttons */}
        <div className="pageheader__services">
          {/* Accessibility Button */}
          <div
            id="servicebuttonAccessibility"
            className="service-button-overlay js-service-button-overlay accessibility"
          >
            <div className="service-button-overlay__button">
              <button
                type="button"
                className="icon-button js-button-overlay-open"
                aria-haspopup="true"
                aria-label="Overlay Öffnen: Barrierefreiheit"
                aria-expanded="false"
              >
                <i className="icon bicon bicon-universal-access" aria-hidden="true"></i>
                <span className="text">Barrierefrei</span>
              </button>
            </div>
            {/* Overlay omitted for brevity */}
          </div>

          {/* Search Button */}
          <div
            id="servicebuttonSearch"
            className="service-button-overlay js-service-button-overlay search fullwidth"
          >
            <div className="service-button-overlay__button">
              <button
                type="button"
                className="icon-button js-button-overlay-open"
                aria-haspopup="true"
                aria-label="Overlay Öffnen: Suche"
                aria-expanded="false"
              >
                <i className="icon bicon bicon-search" aria-hidden="true"></i>
                <span className="text">Suche</span>
              </button>
            </div>
            {/* Overlay omitted for brevity */}
          </div>

          {/* Menu Button */}
          <div
            id="servicebuttonMenu"
            className="service-button-overlay js-service-button-overlay menu"
          >
            <div className="service-button-overlay__button">
              <button
                type="button"
                className="icon-button js-button-overlay-open"
                aria-haspopup="true"
                aria-label="Overlay Öffnen: Menü"
                aria-expanded="false"
              >
                <i className="icon bicon bicon-bars" aria-hidden="true"></i>
                <span className="text">Menü</span>
              </button>
            </div>
            {/* Overlay and navigation omitted for brevity */}
          </div>
        </div>
      </div>
    </header>
  );
}