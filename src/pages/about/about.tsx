import { Button } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__titleBox">
          <h1>Выполненные работы</h1>
        </div>
        <div className="about__buttonBox">
          <Button variant="secondary">Показать все</Button>
          <Button variant="secondary">2015</Button>
          <Button variant="secondary">2016</Button>
          <Button variant="secondary">2017</Button>
          <Button variant="secondary">2018</Button>
          <Button variant="secondary">2019</Button>
          <Button variant="secondary">2020</Button>
        </div>
        <div className="about__imgBox">
          <div className="box">
            <img src="/src/assets/buidling/alkon2!!!.jpg" className="img" />
            <p className="par">
            Алкон 2
            </p>
          </div>
          <div className="box">
          <img src="/src/assets/buidling/campus!!!.jpeg" className="img" />
          <p className="par">
            Кампус
            </p>
          </div>
          <div className="box">
          <img src="/src/assets/buidling/terem!!!.jpg" className="img" />
          <p className="par">
            Терем
            </p>
          </div>
          <div className="box">
          <img src="/src/assets/buidling/atom.jpeg" className="img" />
          <p className="par">
            Атом
            </p>
          </div>
          <div className="box">
          <img src="/src/assets/buidling/centerSambo.jpeg" className="img" />
          <p className="par">
            Самбо
            </p>
          </div>
          <div className="box">
          <img src="/src/assets/buidling/infoWatch.jpg" className="img" />
          <p className="par">
            Инфовотч
            </p>
          </div>
          <div className="box">
          <img src="/src/assets/buidling/skolkovo.jpg" className="img" />
          <p className="par">
            Сколково
            </p>
          </div>
          <div className="box">
          <img src="/src/assets/buidling/filiGrad.jpg" className="img" />
          <p className="par">
            ФилиГранд
            </p>
          </div>
          <div className="box">
          <img src="/src/assets/buidling/metropolis.jpg" className="img" />
          <p className="par">
            Метрополис
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
