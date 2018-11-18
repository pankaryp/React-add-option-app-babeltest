import React from 'react';

// Option Components
class Option extends React.Component {
    render() {
        return (
            <div>   
                <ul>
                    <li>{this.props.optionText}</li>
                    <button 
                        onClick={(e) => {
                            this.props.handleDeleteOne(this.props.optionText);
                        }}
                    >X</button>
                </ul>
            </div>
        );
    }
}

export default Option;