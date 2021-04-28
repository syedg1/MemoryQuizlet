import React from 'react'
import Col from 'react-bootstrap/Col'

function Header() {
    return (
        <div>
            <Col md={12} className="text-center"><h1>Trip Down Memory Lane</h1></Col>     
            <Col md={12} className="text-center"><h3 style={{fontStyle: "italic"}}>Let's take some time to remember your loved ones!</h3></Col>
            <Col md={12} className=" mt-5 pt-3 text-center"><h3>Hover over the images to learn more about each relative <br/> and start the quiz when you are ready...</h3></Col>
        </div>
    )
}

export default Header
