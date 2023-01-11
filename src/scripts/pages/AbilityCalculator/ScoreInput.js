import React from "react";
import ScoreModes from '../../classes/ScoreModes'

class ScoreInput extends React.Component {

    render(){
        switch(this.props.scoreMode){
            default:
            case ScoreModes.PointBuy: return this.showPointBuyInput();
            case ScoreModes.StandardArray: return this.showStandardArrayInput();
            case ScoreModes.Roll4D6DropLowest: return this.showRoll4D6DropLowestInput();
        }
    }

    showPointBuyInput(){
        return (
            <input id={this.props.ability + "-score"} type="number" min="8" max="15" value={this.props.scoreValue} onChange={this.props.onScoreChange}></input>
        )
    }

    showStandardArrayInput(){
        return (
            <select id={this.props.ability + "-score"} onChange={this.props.onScoreChange}>
                <option value={8}>8</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
            </select>
        )
    }

    showRoll4D6DropLowestInput(){
        return (
            this.props.scoreValue
        )
    }
}

export default ScoreInput;