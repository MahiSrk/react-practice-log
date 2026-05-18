export function DataBindingComplex()
{
    var data = [
        {Name: "Samsung Tv", Price: 76544.00, Stock: true},
        {Name: "Nike Casuals", Price: 5263.00, Stock: true},
        {Name: "Casio Watch", Price: 8596.00, Stock: false}
    ]
    return(
        <div className="container-fluid">
            <h2>Product Table</h2>
            <table className= "table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>
                            <tr key={item.Name}>
                                <td>{item.Name}</td>
                                <td>{item.Price}</td>
                                <td>{(item.Stock == true)?"Available":"Out of Stock"}</td>
                                <td>
                                    <button className="btn btn-danger">
                                        <span className="bi bi-trash-fill"></span>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}