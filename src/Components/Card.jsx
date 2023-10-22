import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function ProjectCard(props) {
  return (
    <Card>
      <Card.Img src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;