import { useState } from "react";
import "./ImageZoom.scss";
import { CloseButton } from "react-bootstrap";


const ImageZoom = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = () => {
    setIsZoomed(true);
  };

  const closeModal = () => {
    setIsZoomed(false);
  };

  return (
    <div className="certBox">
      <img className="certBox__img"
        src={src}
        alt={alt}
        onClick={openModal}
      />

      {isZoomed && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt}  />
            {/* <button className="close-button" onClick={closeModal}>
              Закрыть
            </button> */}
            <CloseButton onClick={closeModal}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageZoom;
