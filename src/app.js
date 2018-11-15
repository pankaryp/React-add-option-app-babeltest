// Simple "Add Options" app

console.log('App.js is running');

// User Object
const app = {
    title: 'Optionator',
    desc: 'Simple \"Add Options\" app',
    options: []
};

// Add option event
const addOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value; // get input's value

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender(); // re-render the output
    }
};

// Delete all event
const deleteOption = (e) => {
    e.preventDefault();
    app.options = [];
    reRender(); // re-render the output
};

// Render Function
const reRender = () => {
    const output = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.desc}</p>
            <h4>{app.options.length > 0 ? "Here are your options:" : "No options yet"}</h4>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <p>{console.log(app.options)}</p>

            <form onSubmit={addOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            <button onClick={deleteOption}>Delete all</button>
        </div>
    );
    ReactDOM.render(output, document.getElementById('app'));
};

// Render output for the first time
reRender();






