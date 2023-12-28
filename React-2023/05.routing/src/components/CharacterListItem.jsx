import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {normalizeName} from '../utils/characterUtils'

function CharacterListItem({
    id,
    name,
    hair_color,
    eye_color,
    birth_year,
    gender
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Hair Color: {hair_color}</li>
            <li>Eye Color: {eye_color}</li>
            <li>Birth Year: {birth_year}</li>
            <li>Gender: {gender}</li>
          </ul>
        </Card.Text>
        <Button as={Link} to={`/characters/${id}`} variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterListItem;