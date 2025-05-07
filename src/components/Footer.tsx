import berlinLogo from "../../public/assets/berlin-logo-blanco.png";
export default function FooterContent() {
    return (
        <>
            <div id="content-footer" role="contentinfo">
                <h2 className="aural">Weitere Informationen zu diesem Auftritt</h2>

                <div className="content-footer__brand"></div>

                <a className="to-top" href="#top">
                    Zum Seitenanfang
                </a>

                <nav
                    className="content-footer__links"
                    aria-label="Weiterführende Links"
                >
                    <ul className="js-collapse-palm">
                        <li className="initial-open">
                            <h3 className="heading js-trigger">Designsystem Berlin.de</h3>
                            <ul>
                                <li>
                                    <a href="../../patterns/04-pages-changelog/04-pages-changelog.html">
                                        Changelog
                                    </a>
                                </li>
                                <li>
                                    <a href="../../patterns/04-pages-impressum/04-pages-impressum.html">
                                        Impressum
                                    </a>
                                </li>
                                <li>
                                    <a href="../../patterns/04-pages-datenschutz/04-pages-datenschutz.html">
                                        Datenschutzerklärung
                                    </a>
                                </li>
                                <li>
                                    <a href="../../patterns/04-pages-barrierefreiheit/04-pages-barrierefreiheit.html">
                                        Erklärung zur Barrierefreiheit
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>


            <footer id="footer" className="kiekma">
                <h2 className="aural">Weitere Informationen zu Berlin.de</h2>

                <div className="footer__brand">
                    <a href="#" title="Zur Startseite von Berlin.de">
                        <img
                            src={berlinLogo}
                            alt="Berlin"
                        />
                    </a>
                </div>

                <nav className="footer__links" aria-label="Weitere Bereiche auf Berlin.de">
                    <ul className="js-collapse-palm">
                        {[
                            {
                                title: "Service",
                                links: [
                                    ["Service-App", "https://service.berlin.de/app/"],
                                    ["Termin vereinbaren", "https://service.berlin.de/terminvereinbarung/"],
                                    ["Bürgertelefon 115", "https://service.berlin.de/buergertelefon/"],
                                    ["Notdienste", "https://www.berlin.de/polizei/service/so-erreichen-sie-uns/artikel.532842.php"],
                                    ["Gewerbeservice", "https://www.berlin.de/ea/"]
                                ]
                            },
                            {
                                title: "Behörden",
                                links: [
                                    ["Behörden A-Z", "https://service.berlin.de/behoerden/"],
                                    ["Senatsverwaltungen", "https://service.berlin.de/senatsverwaltungen/"],
                                    ["Bezirksämter", "https://service.berlin.de/bezirksaemter/"],
                                    ["Bürgerämter", "https://service.berlin.de/standorte/buergeraemter/"],
                                    ["Jobcenter", "https://service.berlin.de/jobcenter/"],
                                    ["Einwanderungsamt", "https://www.berlin.de/einwanderung/"]
                                ]
                            },
                            {
                                title: "Politik & Verwaltung",
                                links: [
                                    ["Landesregierung", "https://www.berlin.de/rbmskzl/regierende-buergermeisterin/senat/"],
                                    ["Karriere im Land Berlin", "https://www.berlin.de/karriereportal/"],
                                    ["Bürgerbeteiligung", "https://mein.berlin.de/"],
                                    ["Open Data", "https://daten.berlin.de/"],
                                    ["Vergaben", "https://www.berlin.de/vergabeplattform/"],
                                    ["Ehrenamt", "https://www.berlin.de/buergeraktiv/"]
                                ]
                            },
                            {
                                title: "Aktuelles",
                                links: [
                                    ["Sofortprogramm des Senats", "https://www.berlin.de/rbmskzl/politik/sofortprogramm/"],
                                    ["Ukraine", "https://www.berlin.de/ukraine/"],
                                    ["Energiekrise", "https://www.berlin.de/energie/"],
                                    ["Pressemitteilungen", "https://www.berlin.de/presse/"],
                                    ["Polizeimeldungen", "https://www.berlin.de/polizei/polizeimeldungen/"],
                                    ["Veranstaltungen", "https://www.berlin.de/land/kalender/"]
                                ]
                            },
                            {
                                title: "Themen",
                                links: [
                                    ["Gemeinsam Digital", "https://gemeinsamdigital.berlin.de/"],
                                    ["Grundsteuer", "https://berlin.de/grundsteuer"],
                                    ["Mobilitätswende", "https://www.berlin.de/sen/uvk/verkehr/mobilitaetswende/verkehr-888873.php"],
                                    ["Moderne Verwaltung", "https://www.berlin.de/moderne-verwaltung/"],
                                    ["Berliner Mauer", "https://www.berlin.de/mauer/"]
                                ]
                            },
                            {
                                title: "Weitere Informationen",
                                links: [
                                    ["Kultur & Ausgehen", "https://www.berlin.de/kultur-und-tickets/"],
                                    ["Tourismus", "https://www.berlin.de/tourismus/"],
                                    ["Wirtschaft", "https://www.berlin.de/wirtschaft/"],
                                    ["Stadtleben", "https://www.berlin.de/special/"],
                                    ["BerlinFinder", "https://www.berlin.de/adressen/"],
                                    ["Stadtplan", "https://www.berlin.de/stadtplan/"]
                                ]
                            }
                        ].map((section, i) => (
                            <li key={i}>
                                <h3 className="heading js-trigger">{section.title}</h3>
                                <ul>
                                    {section.links.map(([text, url], j) => (
                                        <li key={j}>
                                            <a href={url}>{text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="footer__claim">
                    <p>Berlin.de ist ein Angebot des Landes Berlin.</p>
                </div>
            </footer>
        </>
    );
}
