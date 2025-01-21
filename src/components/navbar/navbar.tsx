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
      <Navbar>
        <Container>
          <Navbar.Brand>
            <p className="link">Logo</p>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={APP_ROUTES.HOME}>
              <p className="link">Главная</p>
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="second" id="dropdown-basic">
                <p className="link">
                  О компания <IoMdArrowDropdown />
                </p>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item ><Nav.Link as={Link} to={APP_ROUTES.ABOUT}>Готовые объекты</Nav.Link></Dropdown.Item>
                <Dropdown.Item ><Nav.Link as={Link} to={APP_ROUTES.CERTIFICATE}>Сертификаты</Nav.Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to={APP_ROUTES.CONTACT}>
              <p className="link">Контакты</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
