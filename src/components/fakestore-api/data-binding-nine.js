//two way Binding code by using variable 
// this will not work as expected means it will not change the value of username
// in textarea because we used variables they didnt update data/ the data is not editable.
import { useState } from "react";

export function DataBindingTwoWay()
{
    var userName = "John"; 

//in Javascript there are two types of arguments one is "event" and another is "this" 
// event send information about current event means where is clicked what is position x,y,z axis,... and this will send information about current object we pass them as an argument to the method. 

    function handleNameChange(event){
        userName = event.target.value;
    }

    return(
    <div className="container-fluid">
        <dl>
            <dt>User Name</dt>
        <dd>
            <input type="text" value={userName} onChange={handleNameChange}/>
        </dd>
        </dl>
        <p>Hello ! {userName}</p>
    </div>
    )
}