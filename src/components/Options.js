import React from 'react';
import Option from './Option';

// Options Component
const Options = (props) => (

    <div>
        <div className="widget-header">
            <h3 className="widget-header__title"> Your Options </h3>
            <button 
                onClick={props.handleDeleteOptions}
                className="button button--link"
                >Remove all</button>
        </div>
        <div className="widget-content">
            {props.options.map( (option) => 
                    <Option 
                        key={option}
                        optionText={option}
                        handleDeleteOne={props.handleDeleteOne}
                    /> )}
        </div>
    </div>
);

export default Options;