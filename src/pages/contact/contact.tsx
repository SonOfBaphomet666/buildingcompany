import { YMaps, Map } from "@pbe/react-yandex-maps";
import Hero from "../../components/hero/hero";
const Contact = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };
  return (
    <>
      <Hero />
      <div className="contact">
        <div className="contact__box">
          <h1 className="title">Контакты</h1>
          <div className="numberBox">
            <p>+7 999 999 99 99</p>
            <p>+7 999 999 99 99</p>
            <p>info@strong-montage.ru</p>
            <p>
              115408, г. Москва, ул. Братеевская, д. 18, к. 3, 1-й этаж, пом VI,
              комната 1.
            </p>
          </div>
          <div className="contact__mapBox">
            <YMaps>
              <h3>Как нас найти</h3>
              <Map className="map" defaultState={defaultState} />
            </YMaps>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
