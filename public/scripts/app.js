'use strict';

// Simple "Add Options" app

console.log('App.js is running');

// User Object
var app = {
    title: 'Optionator',
    desc: 'Simple \"Add Options\" app',
    options: []
};

// Add option event
var addOption = function addOption(e) {
    e.preventDefault();

    var option = e.target.elements.option.value; // get input's value

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender(); // re-render the output
    }
};

// Delete all event
var deleteOption = function deleteOption(e) {
    e.preventDefault();
    app.options = [];
    reRender(); // re-render the output
};

// Render Function
var reRender = function reRender() {
    var output = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'p',
            null,
            app.desc
        ),
        React.createElement(
            'h4',
            null,
            app.options.length > 0 ? "Here are your options:" : "No options yet"
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'p',
            null,
            console.log(app.options)
        ),
        React.createElement(
            'form',
            { onSubmit: addOption },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        ),
        React.createElement(
            'button',
            { onClick: deleteOption },
            'Delete all'
        )
    );
    ReactDOM.render(output, document.getElementById('app'));
};

// Render output for the first time
reRender();
