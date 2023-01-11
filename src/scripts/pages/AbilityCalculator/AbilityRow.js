import React from 'react';
import Button from 'react-bootstrap/Button';
import AbilityRowState from '../../classes/AbilityRowState'
import ScoreModes from '../../classes/ScoreModes';
import ScoreInput from './ScoreInput'

class AbilityRow extends React.Component {
    constructor(){
        super();
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleBonusChange = this.handleBonusChange.bind(this);
        this.handleRollClicked = this.handleRollClicked.bind(this);
        this.state = new AbilityRowState();
    }

    render(){
        const { ability, scoreMode } = this.props;
        return (
            <tr id={ability}>
                <td><Button className="roll-button inactive-button" onClick={this.handleRollClicked}>{ability.toUpperCase()}</Button></td>
                <td><ScoreInput ability={ability} scoreMode={scoreMode} scoreValue={this.state.score} onScoreChange={this.handleScoreChange}></ScoreInput></td>
                <td>+</td>
                <td><input id={ability + "-bonus"} type="number" min="0" max="2" value={this.state.bonus} onChange={this.handleBonusChange}></input></td>
                <td>=</td>
                <td><span id={ability + "-total"}></span>{this.state.total}</td>
                <td><span id={ability + "-modifier"}></span>{this.state.modifier}</td>
                <td className="point-buy-conditional"><span id={ability + "-cost"}></span>{this.state.cost}</td>
            </tr>
        )
    }

    handleScoreChange(e){
        this.innerHandleScoreChange(e.target.value);
    }

    handleBonusChange(e){
        let newAbilityRowState = this.recalculate(this.state.score, parseInt(e.target.value));
        this.setState(newAbilityRowState);
    }

    handleRollClicked(e){
        if (this.props.scoreMode == ScoreModes.Roll4D6DropLowest){
            this.innerHandleScoreChange(this.rollAbilityScore());
        }
    }

    innerHandleScoreChange(score){
        let newAbilityRowState = this.recalculate(parseInt(score), this.state.bonus);
        this.setState(newAbilityRowState);
        this.props.onCostChange(this.props.ability, newAbilityRowState.cost);
    }

    recalculate(score, bonus){
        let newAbilityRowState = new AbilityRowState();
        newAbilityRowState.score = score;
        newAbilityRowState.bonus = bonus;
        newAbilityRowState.total = score + bonus;
        newAbilityRowState.modifier = parseInt(newAbilityRowState.total / 2) - 5;
        newAbilityRowState.cost = this.scoreToCost(score);
        return newAbilityRowState;
    }

    scoreToCost(score){
        switch(score){
            case 15: return 9;
            case 14: return 7;
            default: return (score - 8);
        }
    }

    rollAbilityScore(){
        let rolls = [];
        for (let i = 0; i < 4; i++){
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        rolls = rolls.sort((a, b) => a - b);
        rolls.shift();

        return rolls.reduce((a, b) => a + b, 0);
    }

}

export default AbilityRow;