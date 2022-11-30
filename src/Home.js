import React from 'react'
import { useState,useEffect } from "react";
import { Col, Row } from 'react-bootstrap';
import Restaurant from './Restaurant'
import resdata from './res.json'

function Home() {
    const[data,setData]=useState([1])

    // const testData=async()=>{
    //     await fetch('../res.json')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data.restaurants))
    // }

    useEffect(()=>{
        // testData()
        setData(resdata.restaurants)
    },[])
console.log('checck',data);
  return (
    <Row>
        {
            data.map((item)=>(
                <Col sm={12} md={8} lg={6} xl={3}>
                <Restaurant item={item}/>
                </Col>
            ))
        }
    </Row>
  )
}

export default Home