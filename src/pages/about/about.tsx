import { useState } from "react";
import PopUp from "../../components/popUp/popUp";

export interface Building {
  date: string;
  imgSrc: string;
  name: string;
  description: string;
  responsibilities: string;
  challenges: string;
  tags: string[];
  cover: string;
}


const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null
  );

  const handleSlideClick = (project: Building) => {
    setSelectedBuilding(project);
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
          <div className="box">
            <img src="/src/assets/buidling/alkon2!!!.jpg" className="img" />
            <p className="par">
              Алкон 2
              <button className="primaryBtn" onClick={handleSlideClick}>
                Open Modal
              </button>
            </p>
          </div>
          <div className="box">
            <img src="/src/assets/buidling/campus!!!.jpeg" className="img" />
            <p className="par">Кампус</p>
          </div>
          <div className="box">
            <img src="/src/assets/buidling/terem!!!.jpg" className="img" />
            <p className="par">Терем</p>
          </div>
          <div className="box">
            <img src="/src/assets/buidling/atom.jpeg" className="img" />
            <p className="par">Атом</p>
          </div>
          <div className="box">
            <img src="/src/assets/buidling/centerSambo.jpeg" className="img" />
            <p className="par">Самбо</p>
          </div>
          <div className="box">
            <img src="/src/assets/buidling/infoWatch.jpg" className="img" />
            <p className="par">Инфовотч</p>
          </div>
          <div className="box">
            <img src="/src/assets/buidling/skolkovo.jpg" className="img" />
            <p className="par">Сколково</p>
          </div>
          <div className="box">
            <img src="/src/assets/buidling/filiGrad.jpg" className="img" />
            <p className="par">ФилиГранд</p>
          </div>
          <div className="box">
            <img src="/src/assets/buidling/metropolis.jpg" className="img" />
            <p className="par">Метрополис</p>
          </div>
        </div>
      </div>
      {isOpen && <PopUp project={selectedBuilding} onClose={closePopUp} />}
    </>
  );
};
export default About;
