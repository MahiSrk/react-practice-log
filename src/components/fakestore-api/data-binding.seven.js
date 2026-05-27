import { useState } from "react";

export function DataBindingOne()
{
    const [userName] = useState("John");
    const [categories] = useState(["Electronics","Footwear","Fashion"]);
    const [products] = useState([{Name:"TV", Price: 4500.00},{Name:"Nike Casuals",Price:3500.25}]);

    return(
        <div className="container-fluid">
            <h2>State in React Function Component</h2>
            <p>Hello ! {userName}</p>
            <h2>Categories</h2>
            <ol>
                {
                    categories.map((category)=>
                    <li key={category}>{category}</li>
                    )
                }
            </ol>
            <h2>Products Table</h2>
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                    {
                        products.map((product)=>
                        <tr key={product.Name}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                        </tr>
                        )
                    }
                
            </tbody>
            </table>
        </div>
    )
}