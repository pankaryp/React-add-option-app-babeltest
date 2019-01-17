import React from 'react';

// Option Components
const Option = (props) => (
    
    <div>   
        <ul>
            <li className="widget-content__item">{props.optionText}</li>
            <button 
                className="button button--link button--item"
                onClick={(e) => {
                    props.handleDeleteOne(props.optionText);
                }}
            >Remove</button>
        </ul>
    </div>
);

export default Option;