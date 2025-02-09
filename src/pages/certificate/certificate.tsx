import ImageZoom from "../../components/imageZoom/imageZoom";
import useDocumentTitle from "../../components/dynamicTitle";
const Certificate = () => {
  useDocumentTitle("Сертификаты");
  return (
    <>
      <div className="cert">
        <div className="cert__title">
          <h2>Сертификаты</h2>
        </div>
        <div className="cert__box">
          <ImageZoom
            className="img fakeCert"
            src="/src/assets/certificate/ЛицензияМЧС1.jpg"
            alt={"Картинка"}
          />
          <ImageZoom
            className="img fakeCert"
            src="/src/assets/certificate/ЛицензияМЧС2.jpg"
            alt={"Картинка"}
          />
        </div>
      </div>
    </>
  );
};

export default Certificate;
