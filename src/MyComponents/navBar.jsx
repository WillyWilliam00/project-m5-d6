import { Nav, Navbar, Button } from "react-bootstrap";
import ThemeContext from "../Context/theme";
import { useContext } from "react";
import { MoonFill, BrightnessHighFill } from "react-bootstrap-icons";

function MyNavBar({ name, setName }) {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="ps-1"
      style={{opacity: ".9"}}
      bg={dark ? "success-subtle" : "info-subtle"}
      data-bs-theme={dark ? "light" : "dark"}
    >
      <Navbar.Brand
        href="#home"
        className="d-flex justify-content-center align-items-center"
      >
        <img
          alt="book"
          src="https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="d-inline-block align-top nav-img rounded-4"
        />
        <span className="fw-bolder ps-2">EPICBOOKS</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Aboute</Nav.Link>
          <Nav.Link href="#link">Browse</Nav.Link>
        </Nav>
        <label className="ms-auto pe-5">
          <input
            className="input-text"
            name="TitleName"
            placeholder="Signore degli Anelli.."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <Button
          className="mx-5"
          style={{padding: "3px 10px 5px 10px"}}
          variant={dark ? "primary" : "secondary"}
          onClick={() => setDark(!dark)}
        >
          {dark ? <BrightnessHighFill style={{color: "yellow"}} /> : <MoonFill />}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;
