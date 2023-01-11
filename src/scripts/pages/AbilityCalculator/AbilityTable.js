import React from 'react';
import '../../../styles/AbilityCalculator/AbilityTable.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AbilityRow from './AbilityRow';


class AbilityTable extends React.Component {
    constructor(){
        super();
        this.updatePointsUsed = this.updatePointsUsed.bind(this);
        this.state  = {
            pointsUsed: 0,
            strCost: 0,
            dexCost: 0, 
            conCost: 0, 
            intCost: 0, 
            wisCost: 0, 
            chaCost: 0
        };
    }

    render(){
        return (
            <div>
                <Table>
                    <tbody>
                        <tr>
                            <td colSpan="2"><Button id="roll-all" className="roll-4d6-drop-low-conditional" onClick={this.props.onRollClicked}>Roll all scores</Button></td>
                            <td colSpan="5"></td>
                            <td className='point-buy-conditional'></td>
                        </tr>
                        <tr className="bold">
                            <td className='col-normal'>ABILITY</td>
                            <td className='col-normal'>SCORE</td>
                            <td className='col-skinny'></td>
                            <td className='col-normal'>BONUS</td>
                            <td className='col-skinny'></td>
                            <td className='col-normal'>TOTAL</td>
                            <td className='col-normal'>MODIFIER</td>
                            <td className='col-normal point-buy-conditional'>COST</td>
                        </tr>
                        <AbilityRow ability="str" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed}></AbilityRow>
                        <AbilityRow ability="dex" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed}></AbilityRow>
                        <AbilityRow ability="con" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed}></AbilityRow>
                        <AbilityRow ability="int" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed}></AbilityRow>
                        <AbilityRow ability="wis" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed}></AbilityRow>
                        <AbilityRow ability="cha" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed}></AbilityRow>
                        <tr className="bold point-buy-conditional">
                            <td colSpan="6"></td>
                            <td colSpan="2">Total cost: {this.state.pointsUsed} / 27</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }

    updatePointsUsed(ability, newCost) {
        switch(ability)
        {
            case "str": this.setState({strCost: newCost}); break;
            case "dex": this.setState({dexCost: newCost}); break;
            case "con": this.setState({conCost: newCost}); break;
            case "int": this.setState({intCost: newCost}); break;
            case "wis": this.setState({wisCost: newCost}); break;
            case "cha": this.setState({chaCost: newCost}); break;
            default: console.log(ability + " is not a valid attribute");
        }

        this.setState((state) => ({
            pointsUsed: state.strCost + state.dexCost + state.conCost + state.intCost + state.wisCost + state.chaCost
        }));
    }    
}

export default AbilityTable;