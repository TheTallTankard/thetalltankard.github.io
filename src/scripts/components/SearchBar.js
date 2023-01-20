import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';

class SearchBar extends React.Component {

    render(){    
        return (
            //We use a 'div' instead of 'Form' here to avoid the reloading of the page when 'Enter' is pressed (it wipes the searchbar text even when the button type is not submit)
            <div className="searchbar">
                <Form.Group as={Row} className="justify-content-center">
                    <Form.Control type="text" placeholder={this.props.placeholderText} onChange={this.props.onChangeHandler}></Form.Control>
                    <Button className="form-control" type="button" onClick={this.props.onSearchHandler}>Search</Button>
                </Form.Group>
            </div>
        )
    }
}

export default SearchBar;