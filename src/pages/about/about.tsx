import { useState } from "react";
import PopUp from "../../components/popUp/popUp";
import buildingsData from "../../assets/data/buildings.json";

export interface Building {
  imgSrc: string;
  name: string;
  description: string;
}

const About = () => {
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
          <h1>Выполненные работы</h1>
        </div>
        <div className="about__imgBox">
          {buildingsData.map((building) => (
            <div className="box" key={building.name}>
              <img
                src={building.imgSrc}
                className="img"
                alt={building.name}
                onClick={() => handleSlideClick(building)}
              />
              <p className="par">
                {building.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <PopUp project={selectedBuilding} onClose={closePopUp} />}
    </>
  );
};
export default About;
