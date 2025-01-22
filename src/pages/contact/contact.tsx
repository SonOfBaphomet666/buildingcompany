import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Hero from "../../components/hero/hero";
const Contact = () => {
  const defaultState = {
    center: [55.661261, 37.627637],
    zoom: 16,
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
              <Map defaultState={defaultState} className="map">
                <Placemark geometry={defaultState.center} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
