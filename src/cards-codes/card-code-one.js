import {useEffect,useState} from "react";
import "./card-code-one.css";
export function CardComponent()
{

const [mars, setMars]= useState([]);
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
            <div className="d-flex flex-wrap">
                {
                    mars.map((item)=>
                    <div key ={item.identifier} className="card m-2 p-2">
                      <img src={`https://epic.gsfc.nasa.gov/archive/natural/2019/05/30/png/${item.image}.png`} height="200" className="card-img-top" />
                      <div className="card-body">
                            <dl>
                                <dt>Caption</dt>
                                <dd>{item.caption}</dd>
                                <dt>Version</dt>
                                <dd>{item.version}</dd>
                            </dl>
                      </div>

                    </div>
                    )
                }


            </div>
        </div>  
    )
}