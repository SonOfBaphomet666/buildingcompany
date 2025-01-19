import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../utils/constant";
import Dropdown from "react-bootstrap/Dropdown";

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
            <Nav.Link as={Link} to={APP_ROUTES.ABOUT}>
              {/* <p className="link">О компании</p> */}
              <Dropdown>
                <Dropdown.Toggle
                  className="transparent-button"
                  id="dropdown-basic"
                >
                  <p className="link">О компании</p>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
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
