import React from 'react';
//import MyInfo from './components/MyInfo.jsx';
import Footer from './components/Footer.jsx';
//import Navbar from './components/Navbar.jsx'
//import ToDo from './components/ToDo.jsx';
import Conditions from './components/HourConditions';
import './styles.css';

function App(){
    const firstname="Arnab";
    const lastname="Dutta";
    return(
        <div>
            <Conditions />
            <Footer />

        </div>
    );
    
}

export default App;