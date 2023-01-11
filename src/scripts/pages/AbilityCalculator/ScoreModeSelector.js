import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../../styles/AbilityCalculator/ScoreModeSelector.css'
import ScoreModes from '../../classes/ScoreModes.js'

class ScoreModeSelector extends React.Component {
    constructor(){
        super();
        this.selectionChanged = this.selectionChanged.bind(this);
    }

    render(){
        return (
            <div className="ScoreModeSelector">
                Select your preferred calculation mode
                <div className="selection-buttons">
                    <Button onClick={this.selectionChanged} value={ScoreModes.PointBuy}>{ScoreModes.PointBuy}</Button>
                    <Button onClick={this.selectionChanged} value={ScoreModes.StandardArray}>{ScoreModes.StandardArray}</Button>
                    <Button onClick={this.selectionChanged} value={ScoreModes.Roll4D6DropLowest}>{ScoreModes.Roll4D6DropLowest}</Button>
                </div>
                <br />
                <div id="score-mode-desc">{ScoreModes.PointBuyDesc}</div>
                <br />
            </div>
        )
    }

    selectionChanged(e){
        this.props.onScoreModeChanged(e);

        let buttons = document.querySelector(".selection-buttons").children;
        for (let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove("active-mode");
        }

        e.target.classList.add("active-mode");

        switch(e.target.value){
            default:
            case ScoreModes.PointBuy: this.setDesc(ScoreModes.PointBuyDesc); break;
            case ScoreModes.StandardArray: this.setDesc(ScoreModes.StandardArrayDesc); break;
            case ScoreModes.Roll4D6DropLowest: this.setDesc(ScoreModes.Roll4D6DropLowestDesc); break;
        }
    }

    setDesc(desc){
        document.getElementById("score-mode-desc").innerHTML = desc;
    }
}

export default ScoreModeSelector;
