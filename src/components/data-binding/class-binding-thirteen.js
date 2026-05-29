//sorting the cities
// so when i click on button it should change the button color as well as make th ecities in assending order
// and if i click the button again it should again change the color and order of button and list for this we have 
// written an onclick event to sort the list we need to use array methods  
import { useState } from "react";

export function ClassDemoComponent(){
    const [cities] = useState(["Delhi","Mumbai","Hyd","Banglore","Pune"]);
    const [buttonClass, setButtonClass]= useState('bi bi-sort-alpha-down');

    function handleSortClick(e){
        if(e.target.className=="bi bi-sort-alpha-down"){
            setButtonClass('bi bi-sort-alpha-up');
            cities.sort();
        }else{
            setButtonClass('bi bi-sort-alpha-down');
            cities.sort();
            // array reverse method is from bottom to top.
            cities.reverse();
        }
        
    }

    return(
        <div className="container-fluid">
            <h2 className="m-3">Cities List <button onClick= {handleSortClick} className="btn btn-success"><span className={buttonClass}></span></button></h2>
            <ol>
                {
                    cities.map(city=>
                        <li key={city}>{city}</li>
                    )
                }
            </ol>
        </div>
    )
}