import React from 'react'
import ReactDOM from 'react-dom'

function condi(){
    const date=new Date();
    const hours=date.getHours();
    if(hours>5 && hours<12){
        return(
            <h1 className="Morning">Good Morning!</h1>
        )
    }
    else if (hours>=12 && hours<16){
        return(
            <h1 className="Afternoon">Good Afternoon!</h1>
        )
    }
    else if (hours >=16 && hours<21){
        return(
            <h1 className="Evening">Good Evening!</h1>
        )
    }
    else{
        return(
            <h1 className="Night">Good Night!</h1>
        )
    }
}

export default condi;