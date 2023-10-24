import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicNav() {


  const handleClickScroll = () => {
    const element = document.getElementById('skills', 'projects', 'home');
    if (element) {
      //  Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Navbar expand="lg" className="bg-bodyy-tertiar">
      <Container>
        <Navbar.Brand href="#idk">React-Bootstrap</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleClickScroll} href="#home">Home</Nav.Link>
            <Nav.Link onClick={handleClickScroll} href="#skills">Skills</Nav.Link>
            <Nav.Link onClick={handleClickScroll} href="#projects">Projects</Nav.Link>
            <Nav.Link onClick={handleClickScroll} href="#contact">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;