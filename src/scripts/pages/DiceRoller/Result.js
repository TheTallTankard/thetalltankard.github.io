import React from 'react';

class Result extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        let resultBoxText = `${this.configuredRollToRollCode()}\n\n${this.props.breakdown}\n\nTotal:\t${this.props.result}`;
        return (
            <div id="result-box" className='Result'>
                <textarea readOnly rows="8" value={resultBoxText} ></textarea>
            </div>
        )
    }

    configuredRollToRollCode(){
        let rollCode = "";
        for (const [k, v] of Object.entries(this.props.configuredRoll)){
            if (this.props.configuredRoll[k] > 0){
                rollCode += `${v}D${k} + `
            }
        }
        
        if (rollCode.length > 3){
            rollCode = rollCode.slice(0, -3);
        }

        return rollCode;
    }
}

export default Result;