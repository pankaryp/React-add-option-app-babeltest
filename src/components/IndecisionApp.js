import React from 'react';
import ReactDOM from 'react-dom';
import AddOptions from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

// IndecisionApp Component (Parent)
class IndecisionApp extends React.Component {

    // With the transform-class-properties babel plugin
    state = {
        options: ['thing one', 'thing two'],
        selectedOption: undefined, 
        modalWindow: true
    }

    // Lifecycle methods
    componentDidMount() {
        try {
            // Take the string from the local storage and convert it back to object
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => {
                    return {
                        options:options
                    }
                });
            }
        } catch(e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Only the the options array gets updated
        if(prevState.options.length !== this.state.options.length) {
            // Stringify the options object and store it to local storage
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('Component Unmounted');
    }

    // handlePick
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        
        // Pick a random option and set the modalWindow state back to true
        this.setState(() => {
            return {
                selectedOption: option,
                modalWindow: true
            }
        });
    };

    // handleDeleteOptions
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            }
        });
    };

    // handleAddOption
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    };

    // handleDeleteOne
    handleDeleteOne = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option;
                })
            }
        });
    };

    // handleClearSelectedOption
    handleClearSelectedOption = () => {

        // Clear selectedOption array and Close modal window
        this.setState(() => {
            return {
                selectedOption: [],
                modalWindow: false
            }
        });
        
    };

    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of the computer";

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOne={this.handleDeleteOne}
                />
                <AddOptions 
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    modalWindowIsOpen={this.state.modalWindow}
                />
            </div>
        );
    }
}

export default IndecisionApp;
