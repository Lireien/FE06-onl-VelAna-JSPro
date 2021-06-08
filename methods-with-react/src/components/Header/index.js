import React from "react";
import Logo from "./logo";
import HeaderTitle from "./headerTitle";

const Header = ({title}) => {
return(
    <header className="App-header">
        <h1>Methods</h1>
        <Logo/>
        <HeaderTitle title = {title}/>
    </header>);
};
export default Header;