import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../common/img/TheTallTankard_Zoomed_NoBackground.png';
import CardLink from '../common/js/CardLink';

class Body extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <Container fluid className="Body">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to The Tall Tankard</h1>
          <div>
            <h3>Check out our tools!</h3>
            <Row>
              <Col>
                <CardLink title="Ability Calculator"
                          desc="Calculates your character's starting ability stats"
                          href="https://thetalltankard.github.io/ability-calculator">
                </CardLink>
              </Col>
              <Col>
                <CardLink title="Dice Roller"
                          desc="Roll any combination of standard D&D 5E dice"
                          href="https://thetalltankard.github.io/dice-roller">
                </CardLink>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }

}

export default Body;
