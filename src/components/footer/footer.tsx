const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerBox">
          <div className="footerBox__logo" />
          <div className="footerBox__about">
            <h3>О компании</h3>
            <p>
              ООО «Стронг-Монтаж» — динамично развивающаяся компания,
              ориентированная на объединение накопленного опыта передовых
              технологий для успешной реализации проектов.
            </p>
          </div>
          <div className="footerBox__contacts">
            <h3>Контакты</h3>
            <p>+7 999 999 99 99</p>
            <p>+7 999 999 99 99</p>
            <p>info@strong-montage.ru</p>
            <p>
              115408, г. Москва, ул. Братеевская, д. 18, к. 3, 1-й этаж, пом VI,
              комната 1.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
