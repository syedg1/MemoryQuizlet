import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './Header.js'
import StudyImage from './StudyImage.js'
import QuizButton from './QuizButton.js'
import { useStateValue } from './StateProvider.js'

function Home() {

    const [{ score }, dispatch] = useStateValue();

    //Reset score when on home page
    const resetScore = () => {
        dispatch({
            type: 'RESET_SCORE'
        })
    };

    return (
        <div>
            <Row className="justify-content-center">
                <Header/>
            </Row>
            <Row className="py-4">
                <Col md={12} className="text-center"><div onClick={resetScore}><QuizButton url="/question1" text="Start Quiz"/></div></Col>
            </Row>
            <Row className="px-3 pt-2">
                <StudyImage url={require("./res/brother.jpg")} name="Albert" relation="Brother"/>
                <StudyImage url={require("./res/sister.jpg")} name="Laura" relation="Sister"/>
                <StudyImage url={require("./res/nephew2.jpg")} name="Simon" relation="Nephew"/>
            </Row>
            <Row className="px-3">
                <StudyImage url={require("./res/neice1.jpg")} name="Julia" relation="Niece"/>
                <StudyImage url={require("./res/nephew1.jpg")} name="John" relation="Nephew"/>
                <StudyImage url={require("./res/neice2.jpg")} name="Alisha" relation="Niece"/>
            </Row>
            <Row className="px-3">
                <StudyImage url={require("./res/grandchild1.jpg")} name="Bella" relation="Grandchild"/>
                <StudyImage url={require("./res/neice3.jpg")} name="Kim" relation="Niece"/>
                <StudyImage url={require("./res/grandchild2.jpg")} name="Timothy" relation="Grandchild"/>
            </Row>
        </div>
    )
}

export default Home
