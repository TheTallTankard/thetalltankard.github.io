import React from 'react';
import Button from 'react-bootstrap/Button';


class DiceBlock extends React.Component {
    constructor(){
        super();
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    render(){
        return(
            <tr className="DiceBlock">
                <td className="num-of-dice">{this.props.numOfDice + " x"}</td>
                <td className="die-type">{"D" + this.props.sides}</td>
                <td className="inc-dec-control">
                    <Button onClick={this.increase}>+</Button>
                    <Button onClick={this.decrease}>-</Button>
                </td>
            </tr>
        )
    }

    increase(e){
        this.changeNumOfDice(this.props.numOfDice + 1);
    }

    decrease(){
        if (this.props.numOfDice > 0){
            this.changeNumOfDice(this.props.numOfDice - 1);
        }
    }

    changeNumOfDice(newNumOfDice){
        this.props.onNumOfDiceChange(this.props.sides, newNumOfDice)
    }
    
}

export default DiceBlock;