import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScoreModes from '../classes/ScoreModes';
import AbilityTable from './AbilityCalculator/AbilityTable';
import ScoreModeSelector from './AbilityCalculator/ScoreModeSelector';

class AbilityCalculator extends React.Component {
    constructor(){
        super();
        this.updateScoreMode = this.updateScoreMode.bind(this);
        this.onRollClicked = this.onRollClicked.bind(this);
        this.state = {
            scoreMode: ScoreModes.PointBuy
        }
    }

    render(){
        return (    
        <div className="App">
            <Header></Header>
                <div className="Body">
                    <ScoreModeSelector onScoreModeChanged={this.updateScoreMode}></ScoreModeSelector>
                    <AbilityTable scoreMode={this.state.scoreMode} onRollClicked={this.onRollClicked}></AbilityTable>
                </div>
            <Footer></Footer>
        </div>
        )
    }

    onRollClicked(e){
        var rollButtons = document.getElementsByClassName("roll-button");
        for (let i = 0; i < rollButtons.length; i++){
            rollButtons[i].click();
        }
    }

    updateScoreMode(e){
        this.setState((prevState) => ({scoreMode: e.target.value}))

        switch(e.target.value){
            default:
            case ScoreModes.PointBuy:
                this.hideElementsByClass("roll-4d6-drop-low-conditional");
                this.showElementsByClass("point-buy-conditional");
                this.disableRollButtons();
                break;
            case ScoreModes.StandardArray:
                this.hideElementsByClass("roll-4d6-drop-low-conditional");
                this.hideElementsByClass("point-buy-conditional");
                this.disableRollButtons();
                 break;
            case ScoreModes.Roll4D6DropLowest:
                this.showElementsByClass("roll-4d6-drop-low-conditional");
                this.hideElementsByClass("point-buy-conditional");
                this.enableRollButtons();
                break;
        }
    }

    showElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++){
            elements[i].style.visibility = "visible";
        }
    }

    hideElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++){
            elements[i].style.visibility = "hidden";
        }
    }

    disableRollButtons(){
        var rollButtons = document.getElementsByClassName("roll-button");
        for (let i = 0; i < rollButtons.length; i++){
            rollButtons[i].classList.add("inactive-button");
        }
    }

    enableRollButtons(){
        var rollButtons = document.getElementsByClassName("roll-button");
        for (let i = 0; i < rollButtons.length; i++){
            rollButtons[i].classList.remove("inactive-button");
        }
    }
}

export default AbilityCalculator;