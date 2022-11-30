import React from 'react'
import { useEffect } from 'react'
import {useState,} from 'react'
import jsondata from './res.json'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Col, Row ,ListGroup, ListGroupItem,Image} from 'react-bootstrap';



function Restaurantdetails() {
    const[data,setData]=useState([])
    const params=useParams()

    // const testData=async()=>{
    //     await fetch('../res.json')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data.restaurants))
    // }

    useEffect(()=>{
        setData(jsondata.restaurants)
    },[])
    console.log("alldata",data);
    console.log("params:",params.id)
    const details=data.find((i)=>i.id==params.id)
    console.log("details",details);
  return (
    <>{details?(
        <Row >
        <Col md={3} className='m-auto'>
                    <Image className='img pt-4' src={details.photograph1} alt={details.name} style={{height: '450px', width: '450px'}}></Image>
                </Col>
                <Col md={3} className='m-auto'>
                    <ListGroup>
                        <ListGroup.Item>
                            <h2>{details.name}</h2>
                            <p>{details.description}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>{details.item}</h2>
                            <p>cuisine type: {details.cuisine_type}</p>
                        </ListGroup.Item>
                    </ListGroup>
                    </Col><Col md={3}>
                    <ListGroup.Item>
                        <h4>Operating Hours</h4>
                        <p>Monday: {details.operating_hours.Monday}</p>
                        <p>Tuesday: {details.operating_hours.Tuesday}</p>
                        <p>Wednesday: {details.operating_hours.Wednesday}</p>
                        <p>Thursday: {details.operating_hours.Thursday}</p>
                        <p>Friday: {details.operating_hours.Friday}</p>
                        <p>Saturday: {details.operating_hours.Saturday}</p>
                        <p>Sunday: {details.operating_hours.Sunday}</p>
                    </ListGroup.Item>
                </Col>
    </Row>


):'null'}</>

  )
}

export default Restaurantdetails