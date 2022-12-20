import Container from 'react-bootstrap/Container';
import '../styles/App.css';
import Header from '../common/js/Header';
import Footer from '../common/js/Footer';
import Body from './Body';

function App() {
  return (
    <Container fluid className="App">
      <Header href="https://TheTallTankard.github.io" text="The Tall Tankard"></Header>
      <Body></Body>
      <Footer></Footer>
    </Container>
  )
}

export default App;
