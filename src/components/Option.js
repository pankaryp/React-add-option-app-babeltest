import React from 'react';

// Option Components
const Option = (props) => (
    
    <div>   
        <ul>
            <li>{props.optionText}</li>
            <button 
                onClick={(e) => {
                    props.handleDeleteOne(props.optionText);
                }}
            >X</button>
        </ul>
    </div>
);

export default Option;