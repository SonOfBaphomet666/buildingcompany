import { RiCloseLine } from "react-icons/ri";
import { Building } from "../../pages/about/about";

interface PopUpProps {
  project: Building | null;
  onClose: () => void;
}

const PopUp = ({ project, onClose }: PopUpProps) => {
  if (!project) {
    return null;
  }
  return (
    <>
      <div className="darkBG" onClick={onClose} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader"></div>
          <button className="closeBtn" onClick={onClose}>
            <RiCloseLine />
          </button>
          <div className="modalContent"></div>
          <p>{project.name}</p>
          <div className="modalActions">
            <div className="actionsContainer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
