import { RiCloseLine } from "react-icons/ri";
import { Building } from "../../pages/about/about";

interface PopUpProps {
  project: Building;
  onClick: () => void;
}

const PopUp = ({ onClick, project }: PopUpProps) => {

  
  return (
    <>
      <div className="darkBG" onClick={onClick} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader"></div>
          <button className="closeBtn" onClick={onClick}>
            <RiCloseLine />
          </button>
          <div className="modalContent"></div>
          <p>{project.date}</p>
          <div className="modalActions">
            <div className="actionsContainer"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopUp;
