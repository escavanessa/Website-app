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
        <Nav className="me-auto">
          <Nav.Link onClick={handleClickScroll} href="#home">Home</Nav.Link>
          <Nav.Link onClick={handleClickScroll} href="#skills">Skills</Nav.Link>
          <Nav.Link onClick={handleClickScroll} href="#projects">Projects</Nav.Link>
          <Nav.Link onClick={handleClickScroll} href="#contact">Projects</Nav.Link>
        </Nav>


        <a href='https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530334509&extra_1=s%7Cc%7C547348909633%7Ce%7Cinstgram%7C&placement=&creative=547348909633&keyword=instgram&partner_id=googlesem&extra_2=campaignid%3D13530334509%26adgroupid%3D126262421974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-303374919011%26loc_physical_ms%3D9011930%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5Vmr0HjcoO8KY7n4hZHYgZ-HKG3A21q23FLi1cQYRsyPcgqiI9I6fhoClEYQAvD_BwE'>
          <svg className='nav-img' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
          </svg>
        </a>
        <a href='https://github.com/'>
          <img className='nav-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </a>

        <a href='https://www.linkedin.com/'>
          <img className='nav-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
        </a>


      </Container>


    </Navbar>
  );
}

export default BasicNav;



