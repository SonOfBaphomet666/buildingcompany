const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerBox">
          <div className="footerBox__logoBox">
            <img className="logo" src="/src/assets/logo.png" />
          </div>
          <div className="footerBox__about">
            <h5>О компании</h5>
            <p>
              <b>Компания &laquo;БКИ ГРУПП&raquo;</b> предоставляет полный
              спектр услуг по оснащению объектов системами безопастности
              различной сложности.
            </p>
          </div>
          <div className="footerBox__system">
            <h5>Системы</h5>
            <p>Системы видеонаблюдения(СВН,СОТ)</p>
            <p>Системы контроля и управления доступом(СКУД)</p>
            <p>Системы охранно-пожарной сигнализации(ОПС)</p>
            <p>Системы оповещения и управления эвакуацией(СОУЭ)</p>
            <p></p>
          </div>
          <div className="footerBox__contacts">
            <h5>Контакты</h5>
            <p>
              <b>Номер телефона: </b> +7 (495) 230-21-10
            </p>
            <p>
              <b>Email:</b> zh.vandanov@bkigroup.ru
            </p>
            <p>
              <b>Адрес:</b> 115201, г. Москва, Старокаширское шоссе, д.2,
              корп.2, эт. 3, пом. I, ком. 13.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
