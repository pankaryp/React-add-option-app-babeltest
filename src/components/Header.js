import React from 'react';

// Header Component
const Header = (props) => (
    <div className="header">
        <h1 className="header__title">{props.title}</h1>
        <h2 className="header__subtitle">{props.subTitle}</h2>
    </div>
);

// Set default props for Header
Header.defaultProps = {
    title: 'Some title here'
};

export default Header;