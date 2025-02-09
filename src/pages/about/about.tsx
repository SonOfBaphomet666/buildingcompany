import { useState } from "react";
import PopUp from "../../components/popUp/popUp";
import buildingsData from "../../assets/data/buildings.json";
import useDocumentTitle from "../../components/dynamicTitle";

export interface Building {
  imgSrc: string;
  name: string;
  description: [];
  text: string;
  address: string;
}

const About = () => {
  useDocumentTitle("Готовые работы")
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null
  );

  const handleSlideClick = (building: Building) => {
    setSelectedBuilding(building);
    setIsOpen(true);
  };

  const closePopUp = () => {
    setSelectedBuilding(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="about">
        <div className="about__titleBox">
          <h2>Выполненные работы</h2>
        </div>
        <div className="about__imgBox">
          {buildingsData.map((building: any) => (
            <div className="box" key={building.name}>
              <div className="middle">
                <button
                  className="middle__btn"
                  onClick={() => handleSlideClick(building)}
                >
                  Подробно
                </button>
              </div>
              <img
                src={building.imgSrc}
                className="img"
                alt={building.name}
                onClick={() => handleSlideClick(building)}
              />

              <p className="par">{building.name}</p>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <PopUp project={selectedBuilding} onClose={closePopUp} />}
    </>
  );
};
export default About;
