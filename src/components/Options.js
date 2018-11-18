import React from 'react';
import Option from './Option';

// Options Component
class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map( (option) => 
                    <Option 
                        key={option}
                        optionText={option}
                        handleDeleteOne={this.props.handleDeleteOne}
                    /> )}
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
            </div>
        );
    }
}

export default Options;