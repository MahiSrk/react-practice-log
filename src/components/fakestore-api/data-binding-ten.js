//this is lenghty process so bacially this is done by using third parties by reack developers 

import { useState } from "react";

export function DataBindingCmplx()
{
const [product,setProduct] = useState({Name:'',Price:0,City:'',Stock:false})
//in Javascript there are two types of arguments one is "event" and another is "this" 
// event send information about current event means where is clicked what is position x,y,z axis,... and this will send information about current object we pass them as an argument to the method. 

    function handleNameChange(event){
        setProduct({
            // so from where the values cam from price came from product.price, name came from e.target.value this e.target.value means this particular value came from textbox
            // so in below functions we handled this in every function,...
        Name: event.target.value,
        Price: product.Price,
        City: product.City,
        Stock: product.Stock,
         })
    }
    function handlePriceChange(event){
     setProduct({
        Name: product.Name,
        Price: event.target.value,
        City: product.City,
        Stock: product.Stock,
         })
    }
    function handleCityChange(event){
        setProduct({
        Name: product.Name,
        Price: product.Price,
        City: event.target.value,
        Stock: product.Stock,
         })
    }
    function handleStockChange(event){
        setProduct({
        Name: product.Name,
        Price: product.Price,
        City: product.City,
        // here we have use target.checked because it is not value we have used checkbox so we have to write target.checked
        Stock: event.target.checked,
         })
    }

    return(
    <div className="container-fluid">
        <div className="row">
            <nav className="col-3">
                <h2>Register Product</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={handleNameChange} className="form-control"/></dd>
                    <dt>Price</dt>
                    <dd><input type="text" onChange={handlePriceChange}  className="form-control"/></dd>
                    <dt>city</dt>
                    <dd>
                        <select className="form-select" onChange={handleCityChange} >
                            <option>Pune</option>
                            <option>Delhi</option>
                            <option>Hydrabad</option>
                            <option>Mumbai</option>
                        </select>
                    </dd>
                    <dt>Stock</dt>
                    <dd className="form-switch">
                        <input type="checkbox" onChange={handleStockChange}  className="form-check-input"/> Available
                    </dd>
                </dl>
            </nav>
            <main className="col-9">
            <h2>Details</h2>
            {/* the values we are going to display here  */}
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>City</dt>
                <dd>{product.City}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
            </dl>
            </main>
        </div>
    </div>
    )
}