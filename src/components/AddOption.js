import React from 'react';

// AddOptions Component
class AddOptions extends React.Component {

    // (With the transform-class-properties babel plugin)
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error: error
            }
        });

        e.target.elements.option.value = "";
    };

    render() {
        return (
            <div className="widget-content">
                <hr className="form__hr"></hr>
                <form onSubmit={this.handleAddOption}>
                    <input 
                        className="form"
                        type="text" 
                        name="option"/>
                    <button className="button">Add option</button>
                    <p>{this.state.error}</p>
                </form>
            </div>
        );
    }
}

export default AddOptions;