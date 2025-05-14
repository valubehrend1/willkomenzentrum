import React, { useState } from "react";
import '../../../public/styles/tags.css';

const DecisionTree: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [tempSelection, setTempSelection] = useState<string | null>(null);

  const navigateTo = (screen: string) => {
    setTempSelection(screen);

    setTimeout(() => {
      setCurrentScreen(screen);
      setTempSelection(null);
    }, 300);
  };

  const goBack = () => {
    setTempSelection("back");

    setTimeout(() => {
      switch (currentScreen) {
        case "yes_german":
        case "no_german":
          setCurrentScreen("start");
          break;
        case "yes_b1":
        case "no_b1":
          setCurrentScreen("start");
          break;
        case "yes_school":
        case "no_school":
          setCurrentScreen("yes_german");
          break;
        default:
          setCurrentScreen("start");
          break;
      }
      setTempSelection(null);
    }, 300);
  };

  const buttonStyle = (selected: boolean, buttonId: string) => ({
    padding: "8px 16px",
    margin: "0 8px",
    borderRadius: "20px",
    border: "1px solid #007256",
    backgroundColor: selected || tempSelection === buttonId ? "#007256" : "white",
    color: selected || tempSelection === buttonId ? "white" : "#007256",
    cursor: "pointer",
    fontWeight: "500" as const,
    textDecoration: "none",
    transition: "ease 0.3s",
  });

  const buttonContainerStyle = {
    display: "flex",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const containerStyle = {
    margin: "0 auto",
  };

  const textStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    lineHeight: "1.5",
  };

  const renderContent = () => {
    switch (currentScreen) {
      case "start":
        return (
          <div>
            <h3>Sprechen Sie Deutsch?</h3>
            <div style={buttonContainerStyle}>
              <button style={buttonStyle(false, "yes_german")} onClick={() => navigateTo("yes_german")}>
                Ja
              </button>
              <button style={buttonStyle(false, "no_german")} onClick={() => navigateTo("no_german")}>
                Nein
              </button>
            </div>
          </div>
        );

      case "yes_german":
        return (
          <div>
            <h3>Haben Sie ein B1-Zertifikat?</h3>
            <div style={buttonContainerStyle}>
              <button style={buttonStyle(false, "yes_b1")} onClick={() => navigateTo("yes_b1")}>
                Ja
              </button>
              <button style={buttonStyle(false, "no_b1")} onClick={() => navigateTo("no_b1")}>
                Nein
              </button>
              <button style={buttonStyle(false, "back")} onClick={() => goBack()}>
                Zurück
              </button>
            </div>
          </div>
        );

      case "no_german":
        return (
          <div>
            <h3>Sprechen Sie Deutsch?</h3>
            <div style={buttonContainerStyle}>
              <button style={buttonStyle(false, "yes_german")} onClick={() => navigateTo("yes_german")}>
                Ja
              </button>
              <button style={buttonStyle(true, "no_german")} onClick={() => navigateTo("no_german")}>
                Nein
              </button>
              <button style={buttonStyle(false, "back")} onClick={() => goBack()}>
                Zurück
              </button>
            </div>
            <div style={textStyle}>
              <p>
                Dann besuche einen Deutschkurs. Wie das geht und wo in Berlin du einen Deutschkurs machen kannst,
                {<a href="#" aria-label="internal link" title="homepage" className="more">findest du hier</a>}.
              </p>
            </div>
          </div>
        );

      case "yes_b1":
        return (
          <div>
            <h3>Haben Sie ein B1-Zertifikat?</h3>
            <div style={buttonContainerStyle}>
              <button style={buttonStyle(true, "yes_b1")} onClick={() => navigateTo("yes_b1")}>
                Ja
              </button>
              <button style={buttonStyle(false, "no_b1")} onClick={() => navigateTo("no_b1")}>
                Nein
              </button>
              <button style={buttonStyle(false, "back")} onClick={() => goBack()}>
                Zurück
              </button>
            </div>
            <div style={textStyle}>
              <p style={{ color: '#007256' }}>Sie erfüllen diese Anforderung!</p>
            </div>
          </div>
        );

      case "no_b1":
        return (
          <div>
            <h3>Sind Sie in Deutschland zur Schule gegangen?</h3>
            <div style={buttonContainerStyle}>
              <button style={buttonStyle(false, "yes_school")} onClick={() => navigateTo("yes_school")}>
                Ja
              </button>
              <button style={buttonStyle(false, "no_school")} onClick={() => navigateTo("no_school")}>
                Nein
              </button>
              <button style={buttonStyle(false, "back")} onClick={() => goBack()}>
                Zurück
              </button>
            </div>
          </div>
        );

      case "yes_school":
        return (
          <div>
            <h3>Sind Sie in Deutschland zur Schule gegangen?</h3>
            <div style={buttonContainerStyle}>
              <button style={buttonStyle(true, "yes_school")} onClick={() => navigateTo("yes_school")}>
                Ja
              </button>
              <button style={buttonStyle(false, "no_school")} onClick={() => navigateTo("no_school")}>
                Nein
              </button>
              <button style={buttonStyle(false, "back")} onClick={() => goBack()}>
                Zurück
              </button>
            </div>
            <div style={textStyle}>
              <p>
                Dann brauchst du nur einen Nachweis darüber. Mehr Informationen findest zu unter <a href="#" aria-label="My documents" title="My documents" className="more">„Meine Unterlagen"</a>
              </p>
            </div>
          </div>
        );

      case "no_school":
        return (
          <div>
            <h3>Sind Sie in Deutschland zur Schule gegangen?</h3>
            <div style={buttonContainerStyle}>
              <button style={buttonStyle(false, "yes_school")} onClick={() => navigateTo("yes_school")}>
                Ja
              </button>
              <button style={buttonStyle(true, "no_school")} onClick={() => navigateTo("no_school")}>
                Nein
              </button>
              <button style={buttonStyle(false, "back")} onClick={() => goBack()}>
                Zurück
              </button>
            </div>
            <div style={textStyle}>
              <p>
                Dann kannst du eine Prüfung machen. Das geht bei den {<a href="https://www.berlin.de/vhs/" target="_blank" className="extern">Volkshochschulen in Berlin</a>}, {<a href="https://www.goethe.de/de/spr/kur.html" target="_blank" className="extern">dem Goethe-Institut</a>} oder einem anderen zertifizierten Prüfungszentrum. Dort meldest du dich an und zahlst die Kosten. Wenn du die Prüfung bestanden hast, bekommst du dein Zertifikat.
              </p>
            </div>
          </div>
        );

      default:
        return <div>Error: Pantalla no encontrada</div>;
    }
  };

  return <div style={containerStyle}>{renderContent()}</div>;
};

export default DecisionTree;