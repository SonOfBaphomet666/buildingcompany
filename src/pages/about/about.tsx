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
            <div className="img" />
            <p className="par">
            Музей
            </p>
          </div>
          <div className="box">
            <div className="img" />
            Музей
          </div>
          <div className="box">
            <div className="img" />
            Музей
          </div>
          <div className="box">
            <div className="img" />
            Музей
          </div>
          <div className="box">
            <div className="img" />
            Музей
          </div>
          <div className="box">
            <div className="img" />
            Музей
          </div>
          <div className="box">
            <div className="img" />
            Музей
          </div>
          <div className="box">
            <div className="img" />
            Музей
          </div>
          <div className="box">
            <div className="img" />
            Музей
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
