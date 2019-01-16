import React from 'react';
import Option from './Option';

// Options Component
const Options = (props) => (

    <div>
        {props.options.map( (option) => 
            <Option 
                key={option}
                optionText={option}
                handleDeleteOne={props.handleDeleteOne}
            /> )}
        <button onClick={props.handleDeleteOptions}>Remove all</button>
    </div>
);

export default Options;