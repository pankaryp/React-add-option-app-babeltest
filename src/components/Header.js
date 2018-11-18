import React from 'react';

// Header Component
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

// Set default props for Header
Header.defaultProps = {
    title: 'Some title here'
};

export default Header;