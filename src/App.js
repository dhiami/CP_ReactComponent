import './App.css';
import React from "react";
import { Card, Button} from 'react-bootstrap';
import Name from './Component/FullName'
import Adresse from './Component/Address'
import Photo from './Component/ProfilePhoto'

function App() {
  return (
    <div className="App">
      <main className="Main">
<Card className="Card" style={{ width: '18rem' }}>
<Card.Img variant="top" />
<Photo />
<Card.Body>
<Card.Title><Name></Name></Card.Title>
<Card.Text>
<Adresse></Adresse>
</Card.Text>
<Button variant="primary">Do you like Dogs too ?</Button>
</Card.Body>
</Card>
  </main>
    </div>
  );
}

export default App;