import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../utils/constant";
import Dropdown from "react-bootstrap/Dropdown";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand>
          <img className="logo" src="/src/assets/logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={APP_ROUTES.HOME}>
              <p className="link">Главная</p>
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="second" id="dropdown-basic">
                <p className="link">
                  О компании <IoMdArrowDropdown />
                </p>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={APP_ROUTES.ABOUT}>
                  Готовые объекты
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={APP_ROUTES.CERTIFICATE}>
                  Сертификаты
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to={APP_ROUTES.CONTACT}>
              <p className="link">Контакты</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
