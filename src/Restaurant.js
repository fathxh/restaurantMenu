import React from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

function Restaurant({item}) {
  console.log("Res",item);
    
  return (

<Link to={`/details/${item.id}`}>
  <Card style={{ width: '18rem', height:'18rem' }}>
      <Card.Img variant="top" src={item.photograph1} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    
  )

}

export default Restaurant