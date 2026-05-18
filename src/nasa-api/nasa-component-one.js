// A developer will not deal with data if he didnt understand data.
//now to store the data we have to create a state
import {useEffect,useState} from "react";

export function NasaComponent()
{

// to configure the state we have written const in the function and mars is an object and 
// setmars is a setter and in api we see the final data is returned is
//object so in () of usestate we use {} so that became useState({}) so if we keep it as it is 
// like useState() so every data is allowed but we give there arrray, object according to our data 
// the only array or object will work.
const [mars, setMars]= useState([]);
//    function handleFetchClick(){
// how to fetch data from API
// So for this javascript has fetch promise we can also use jQuery ajax
    
    useEffect(()=>{
        fetch("https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data=>{
            setMars(data);
        })
    },[])
//    }
    return (
        <div className="container-fluid">
            <h2>Mars Rover Photos <button  className="btn btn-primary">Fetch</button></h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                    </tr>
                </thead>
                <tbody>

                    {/* by configuring this it will give an error Cannot read properties of undefined (reading 'map')
                     TypeError: Cannot read properties of undefined (reading 'map')
                    at NasaComponent (http://localhost:3000/static/js/bundle.js:1222:24)
                    this error occours becouse react loads the data component first before data is ready i=so we have to
                    tell it we want the data to load while page is loading so we need to (useeffect) instead of fetch so why to use tnhis 
                    because useEffect uses a callback function and this call back function uses all our fetch
                    */}


                    {
                        mars.map(item=>
                            <tr key={item.identifier}>
                                <td>{item.identifier}</td>
                                <td>
                                    {/* <img width="200" height="20" src={`${item.image}.jpg`} /> */}

                                    {/* <img width="200" height="200" src={`https://epic.gsfc.nasa.gov/archive/natural/2019/05/30/png/${item.image}.png`} />  */}
                                    {/* to make an image clickable we have keep the image in anchor tag. and taget="_blank" is used to open the photo on new tab. */}
                                    <a href={`https://epic.gsfc.nasa.gov/archive/natural/2019/05/30/png/${item.image}.png`} target="_blank"><img width="200" height="200" src={`https://epic.gsfc.nasa.gov/archive/natural/2019/05/30/png/${item.image}.png`} /></a> 

                                </td>
                                <td>{item.caption}</td>
                                <td>{item.version}</td>
                            </tr>
                            
                        )
                    }
                </tbody>
            </table>
        </div>  
    )
}