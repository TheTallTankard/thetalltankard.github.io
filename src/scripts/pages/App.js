import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import logo from '../../img/TheTallTankard_Zoomed_NoBackground.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardLink from '../components/CardLink';

function App() {
  return (
    <Container fluid className="App">
      <Header></Header>
      <Container fluid className="Body">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to The Tall Tankard</h1>
          <div>
            <h3>Check out our tools!</h3>
            <Row>
              <Col>
                <CardLink title="Ability Calculator"
                          desc="Calculate character initial stats (point buy, standard array, or roll 4D6 and drop the lowest)"
                          href="#/ability-calculator">
                </CardLink>
              </Col>
              <Col>
                <CardLink title="Dice Roller"
                          desc="Roll any combination of standard D&D 5E dice"
                          href="#/dice-roller">
                </CardLink>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </Container>
  )
}

export default App;
