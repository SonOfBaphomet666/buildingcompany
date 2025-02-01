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
          <div className="modal__actions">
            <img src={project.imgSrc} className="img" />
          </div>
          <div className="modal__header">
            <h3>{project.name}</h3>
          </div>
          <button className="closeBtn" onClick={onClose}>
            <RiCloseLine />
          </button>
          <div className="modal__info">
            <div className="address">
              <h5>
                <b>Адрес:</b>
              </h5>
              <p>{project.address}</p>
            </div>
            <div className="descr">
              <h5>
                <b>Работы:</b>
              </h5>
              {project.description.map((item: any, index: any) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
