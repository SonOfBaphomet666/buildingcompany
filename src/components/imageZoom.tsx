import { useState } from "react";
import "./ImageZoom.css";


const ImageZoom = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = () => {
    setIsZoomed(true);
  };

  const closeModal = () => {
    setIsZoomed(false);
  };

  return (
    <div className="boxImg">
      <img
        src={src}
        alt={alt}
        onClick={openModal}
        style={{
          cursor: "pointer",
          width: "200px", // Исходный размер
          transition: "width 0.3s ease",
        }}
      />

      {isZoomed && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} style={{ width: "100%" }} />
            <button className="close-button" onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageZoom;
