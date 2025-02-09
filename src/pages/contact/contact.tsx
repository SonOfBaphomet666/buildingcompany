import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Hero from "../../components/hero/hero";
import useDocumentTitle from "../../components/dynamicTitle";
const Contact = () => {
  const defaultState = {
    center: [55.661261, 37.627637],
    zoom: 16,
  };
  useDocumentTitle("Контакты");
  return (
    
    <>
      <Hero />
      <div className="contact">
        <div className="contact__box">
          <h2 className="title">Контакты</h2>
          <div className="numberBox">
            <p><b>Генеральный директор:</b> Ванданов Жаргал Баторович</p>
            <p>
              <b>Номер телефона: </b> +7 (495) 230-21-10
            </p>
            <p><b>Email:</b> zh.vandanov@bkigroup.ru</p>
            <p>
            <b>Адрес:</b> 115201, г. Москва, Старокаширское шоссе, д.2, корп.2, эт. 3, пом.
              I, ком. 13.
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
