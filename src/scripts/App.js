import Container from 'react-bootstrap/Container';
import '../styles/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

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
