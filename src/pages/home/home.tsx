import { FaClock } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import Hero from "../../components/hero/hero";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="skills">
        <div className="skills__icons">
          <div className="item1">
            <FaClock className="icon" />
            <p>Результаты в кратчайшие сроки</p>
          </div>
          <div className="item2">
            <FaHandshake className="icon" />
            <p>Индивидуальный подход к каждому клиенту</p>
          </div>
          <div className="item3">
            <FaPeopleGroup className="icon" />
            <p>Высококвалифицированные специалисты</p>
          </div>
          <div className="item4">
            <PiMedalFill className="icon" />
            <p>Высокая эффективность и качество работы</p>
          </div>
        </div>
      </section>
      <section className="slide">
        <div className="slide__title">
          <h3>Выполненные Работы</h3>
        </div>
        <div className="slide__box">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/src/assets/buidling/atom.jpeg"
                  className="imgSlide d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/src/assets/buidling/alkon2!!!.jpg"
                  className="imgSlide d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/src/assets/buidling/metropolis.jpg"
                  className="imgSlide d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
