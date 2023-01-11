import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import CardLink from '../components/CardLink';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CommonTheme() {
  return (
    <div className="App">
      <Header href="common-theme" text="<Application Name>"></Header>
        <Container fluid className="Body">
            <Row>
                <Col><a href="#">Link</a></Col>
            </Row>
            <Row>
                <Col><input type="checkbox"></input></Col>
                <Col><input type="number" value={0}></input></Col>
                <Col><input type="text" value="Single line text"></input></Col>
            </Row>
            <Row>
                <Col><textarea value="Multiline Text"></textarea></Col>
                <Col><textarea readOnly value="Read-only Multiline Text"></textarea></Col>
            </Row>
            <Row>
                <Col><Button>Button</Button></Col>
            </Row>
            <Row>
                <Col><CardLink title="Card Title" desc="Card Desc" href="#"></CardLink></Col>
                <Col><CardLink title="Card Title" desc="Card Desc" href="#"></CardLink></Col>
                <Col><CardLink title="Card Title" desc="Card Desc" href="#"></CardLink></Col>
            </Row>
            <Row>
                <Table>
                    <thead>
                        <tr>
                            <th>table header 1</th>
                            <th>table header 2</th>
                            <th>table header 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>table body 1</td>
                            <td>table body 2</td>
                            <td>table body 3</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
      <Footer></Footer>
    </div>
  );
}

export default CommonTheme;
