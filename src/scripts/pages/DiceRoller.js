import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Header from '../components/Header';
import Footer from '../components/Footer';

import DiceBlock from './DiceRoller/DiceBlock'
import Result from './DiceRoller/Result'

class DiceRoller extends React.Component {
    constructor(){
      super();
      this.updateResult = this.updateResult.bind(this);
      this.updateConfiguredRoll = this.updateConfiguredRoll.bind(this);
      this.roll = this.roll.bind(this);
      this.clear = this.clear.bind(this);
      this.state = {
        configuredRoll : {
          4: 0,
          6: 0,
          8: 0,
          10: 0,
          12: 0,
          20: 0,
          100: 0
        },
        breakdown: "",
        result: 0
      }
    }

    render(){
        const {configuredRoll, breakdown, result} = this.state;
        return (
            <Container fluid className="App">
            <Header href="/" text="The Tall Tankard"></Header>
                <Container fluid className="Body">
                <Row>
                <Col md={4}>
                    <Table borderless>
                    <tbody>
                        <DiceBlock sides={4} numOfDice={configuredRoll[4]} onNumOfDiceChange={this.updateConfiguredRoll}></DiceBlock>
                        <DiceBlock sides={6} numOfDice={configuredRoll[6]} onNumOfDiceChange={this.updateConfiguredRoll}></DiceBlock>
                        <DiceBlock sides={8} numOfDice={configuredRoll[8]} onNumOfDiceChange={this.updateConfiguredRoll}></DiceBlock>
                        <DiceBlock sides={10} numOfDice={configuredRoll[10]} onNumOfDiceChange={this.updateConfiguredRoll}></DiceBlock>
                        <DiceBlock sides={12} numOfDice={configuredRoll[12]} onNumOfDiceChange={this.updateConfiguredRoll}></DiceBlock>
                        <DiceBlock sides={20} numOfDice={configuredRoll[20]} onNumOfDiceChange={this.updateConfiguredRoll}></DiceBlock>
                        <DiceBlock sides={100} numOfDice={configuredRoll[100]} onNumOfDiceChange={this.updateConfiguredRoll}></DiceBlock>
                    </tbody>
                    </Table>
                </Col>
                <Col md={8}>
                    <div className="result-block">
                    <div>
                    <Button onClick={this.clear}>CLEAR</Button>
                    <Button onClick={this.roll}>ROLL</Button>
                    </div>
                    <div>
                    <Result configuredRoll={configuredRoll} breakdown={breakdown} result={result}></Result>
                    </div>
                    </div>
                </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Container>
      )
    }
    
      updateResult(rollResult){
        let breakdownString = "";
        let sum = 0;
        for (let i = 0; i < rollResult.length; i++){
          breakdownString += rollResult[i] + " + ";
          sum += rollResult[i];
        }
        breakdownString = breakdownString.slice(0, -3);
    
        this.setState((prevState) => ({ breakdown: breakdownString}))
        this.setState((prevState) => ({ result: sum}))
      }
    
      updateConfiguredRoll(sides, numOfDice){
        let newConfiguredRoll = this.state.configuredRoll;
        newConfiguredRoll[sides] = numOfDice;
    
        this.setState((prevState) => ({
          configuredRoll: newConfiguredRoll,
          breakdown: "",
          result: 0
        }));
    
      }
    
      roll(){
        let breakdown = "";
        let result = 0;
        for (const [k, v] of Object.entries(this.state.configuredRoll)){
          if (v > 0){
            let singleDieArray = this.rollSingleDieType(v, k);
            breakdown += `(${singleDieArray.join("+")}) + `;
            result += this.sumNumbers(singleDieArray);
          }
        }
        if (breakdown.length > 3){
          breakdown = breakdown.slice(0, -3);
        }
    
        this.setState((prevState) => ({
          breakdown: breakdown,
          result: result
        }))
      }
    
      rollSingleDieType(numOfDice, sides){
          var rolls = [];
          for (let i = 0; i < numOfDice; i++){
              rolls.push(Math.floor(Math.random() * parseInt(sides)) + 1);
          }
          return rolls;
      }
    
      sumNumbers(array){
        return array.reduce((a, b) => (a + b), 0);
      }
    
      clear(){
        this.setState((prevState) => ({
          configuredRoll : {
            4: 0,
            6: 0,
            8: 0,
            10: 0,
            12: 0,
            20: 0,
            100: 0
          },
          breakdown: "",
          result: 0
        }))
      }
    
    }
  
  export default DiceRoller;