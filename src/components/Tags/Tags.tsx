import React, { useState } from "react";

const DecisionTree: React.FC = () => {
  // Estado para seguir la ubicación actual en el árbol de decisiones
  const [currentScreen, setCurrentScreen] = useState("start");
  // Estado para botones temporalmente seleccionados
  const [tempSelection, setTempSelection] = useState<string | null>(null);

  // Función para navegar a una nueva pantalla
  const navigateTo = (screen: string) => {
      // Seleccionar temporalmente el botón
      setTempSelection(screen);
      
      // Establecer un temporizador para cambiar de pantalla después de 300ms
      setTimeout(() => {
        setCurrentScreen(screen);
        setTempSelection(null);
      }, 300);
  };

  // Función personalizada para volver atrás según la pantalla actual
  const goBack = () => {
      // Seleccionar temporalmente el botón de retroceso
      setTempSelection("back");
      
      // Establecer un temporizador para volver atrás después de 300ms
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

  // Estilo para los botones
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

  // Estilo para el contenedor de botones
  const buttonContainerStyle = {
    display: "flex",
    marginTop: "20px",
    marginBottom: "20px",
  };

  // Estilo para el contenedor principal
  const containerStyle = {
    margin: "0 auto",
  };

  // Estilo para el texto
  const textStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    lineHeight: "1.5",
  };

  // Renderizado condicional basado en la pantalla actual
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
                Dann besuche einen Deutschkurs. Wie das geht und wo in Berlin du einen Deutschkurs machen kannst, findest du hier [Verweis: Intern, andere Ergebnisseite auf gleicher Plattform].
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
                Dann brauchst du nur einen Nachweis darüber. Mehr Informationen findest zu unter „Meine Unterlagen" [Verweis: Intern, andere Seite auf gleicher Plattform].
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
                Dann kannst du eine Prüfung machen. Das geht bei den Volkshochschulen in Berlin [Link], dem Goethe-Institut [Link] oder einem anderen zertifizierten Prüfungszentrum. Dort meldest du dich an und zahlst die Kosten. Wenn du die Prüfung bestanden hast, bekommst du dein Zertifikat.
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