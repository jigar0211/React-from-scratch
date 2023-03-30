import React from 'react'
import "App.css"
import Picture from "./component/Picture";
import Navbar from "./component/Navbar";

const App = () => {
    return(
        <div>
        <Navbar />
        <div className='container'>Hello React</div>
        <Picture />
        </div>
    );
}

export default App;