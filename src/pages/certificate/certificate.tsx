import ImageZoom from "../../components/imageZoom/imageZoom";
const Certificate = () => {
  return (
    <>
      <div className="cert">
        <div className="cert__title">
          <h2>Сертификаты</h2>
        </div>
        <div className="cert__box">
          <ImageZoom
            className="img"
            src="/src/assets/certificate/ЛицензияМЧС1.jpg"
          />
          <ImageZoom
            className="img"
            src="/src/assets/certificate/ЛицензияМЧС2.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Certificate;
