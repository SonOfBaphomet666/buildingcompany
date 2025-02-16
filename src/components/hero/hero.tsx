const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__box">
        <div className="hero__titleBox">
          <h2>ООО «БКИ ГРУПП»</h2>
        </div>
        <img src="/src/assets/hero3.jpg" className="heroImg" />
        <div className="titleBox">
          <div className="titleBox__about">
            <h4>О нас</h4>
          </div>
          <div className="titleBox__par">
            <div className="bki">
              <h4>ООО «БКИ ГРУПП»</h4>
            </div>
            <p>
              Предоставляем полный спект услуг по оснащению объектов системаи
              безопасности различной степени сложности: поставка оборудования и
              материалов, проектирования, выполнение монтажных и пусконаладочных
              работ, гарантийное и постгарантийное обслуживание.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
