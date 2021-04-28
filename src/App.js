import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './Home.js'
import Question from './Question.js'
import Results from './Results.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid className="px-4 py-4">
        <Router>
          <Switch>
            <Route path="/question1">
              <Question 
                url={require("./res/nephew1.jpg")} 
                options={['John (Nephew)', 'Albert (Brother)', 'Timothy (Grandchild)', 'Simon (Nephew)']} 
                correctAnswer="John (Nephew)" 
                questionNumber={1}
              />
            </Route>
            <Route path="/question2">
              <Question 
                url={require("./res/neice2.jpg")} 
                options={['Bella (Grandchild)', 'Julia (Neice)', 'Alisha (Niece)', 'Kim (Niece)']} 
                correctAnswer="Alisha (Niece)" 
                questionNumber={2}
              />
            </Route>
            <Route path="/question3">
              <Question 
                url={require("./res/sister.jpg")} 
                options={['Rebecca (Cousin)', 'Laura (Sister)', 'Kim (Sister)', 'Julia (Niece)']} 
                correctAnswer="Laura (Sister)" 
                questionNumber={3}
              />
            </Route>
            <Route path="/question4">
              <Question 
                url={require("./res/neice1.jpg")} 
                options={['Laura (Sister)', 'Bella (Grandchild)', 'Alisha (Niece)', 'Julia (Niece)']} 
                correctAnswer="Julia (Niece)" 
                questionNumber={4}
              />
            </Route>
            <Route path="/question5">
              <Question 
                url={require("./res/nephew2.jpg")} 
                options={['Simon (Nephew)', 'Timothy (Grandchild)', 'John (Nephew)', 'Albert (Brother)']} 
                correctAnswer="Simon (Nephew)" 
                questionNumber={5}
              />
            </Route>
            <Route path="/question6">
              <Question 
                url={require("./res/grandchild1.jpg")} 
                options={['Alisha (Niece)', 'Bella (Grandchild)', 'Timothy (Grandchild)', 'Kim (Niece)']} 
                correctAnswer="Bella (Grandchild)" 
                questionNumber={6}
              />
            </Route>
            <Route path="/question7">
              <Question 
                url={require("./res/neice3.jpg")} 
                options={['Laura (Sister)', 'Julia (Niece)', 'Kim (Niece)', 'Alisha (Niece)']} 
                correctAnswer="Kim (Niece)" 
                questionNumber={7}
              />
            </Route>
            <Route path="/question8">
              <Question 
                url={require("./res/brother.jpg")} 
                options={['Albert (Brother)', 'Simon (Nephew)', 'David (Cousin)', 'John (Nephew)']} 
                correctAnswer="Albert (Brother)" 
                questionNumber={8}
              />
            </Route>
            <Route path="/question9">
              <Question 
                url={require("./res/grandchild2.jpg")} 
                options={['Bella (Grandchild)', 'Simon (Nephew)', 'John (Nephew)', 'Timothy (Grandchild)']} 
                correctAnswer="Timothy (Grandchild)" 
                questionNumber={9}
              />
            </Route>
            <Route path="/results">
              <Results/>
            </Route>
            <Route path="/">
              <Home/>
            </Route> 
          </Switch>
        </Router>      
      </Container>
    </div>
  );
}

export default App;
