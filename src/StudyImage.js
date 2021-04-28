import React from 'react'
import Col from 'react-bootstrap/Col'
import './StudyImage.css'

function StudyImage({ url, name, relation }) {
    return (
        <Col md={4} className="p-2">
            <div className="image_overlay_wrapper">
                <img src={url}/>
                <div className="image_overlay">
                    <h2>{name}</h2>
                    <h5>{relation}</h5>
                </div>
            </div>
        </Col>
    )
}

export default StudyImage
