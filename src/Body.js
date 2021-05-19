import React from 'react'
import "./Body.css"
import { Button } from "@material-ui/core"


function Body() {
    return (
        <div className="body">
            <div className="body__headline">
               <h1>Create your website in </h1> 
               <h2> three simple steps</h2>  
            </div>
            <p>- it's free! -</p>
             <Button>START HERE</Button>
         
            
        </div>
        
        
    )
}

export default Body
