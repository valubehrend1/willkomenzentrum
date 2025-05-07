import React, { useState } from "react";
import { AccordionItems } from "@/data";
import DecisionTree from "./Tags/Tags"; // Importando el componente Tags

const AccordionBerlin: React.FC = () => {

  const [openIndexes, setOpenIndexes] = useState<number[]>([2]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <ul className="js-accordion initialized" data-allow-multiple="true" id="myid90029">
      {AccordionItems.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <li key={index}>
            <strong
              className={`js-accordion__heading ${isOpen ? "open" : "closed"}`}
              tabIndex={0}
              role="button"
              aria-controls={`panel${index}_of_myid90029`}
              aria-expanded={isOpen}
              onClick={() => toggleItem(index)}
              onKeyDown={(e) => e.key === "Enter" && toggleItem(index)}
            >
              <span className="title">{item.title}</span>
            </strong>
            <div
              className={`js-accordion__panel ${isOpen ? "opened" : "closed"}`}
              id={`panel${index}_of_myid90029`}
              style={{ display: isOpen ? "block" : "none" }}
            >
              <div className="text">
                <div className="textile">{item.content}</div>
                {index === 2 && <DecisionTree />} {/* Renderiza el componente Tags si es el ítem 3 (índice 2) */}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AccordionBerlin;