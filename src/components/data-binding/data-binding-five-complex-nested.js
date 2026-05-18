export function DataBindingNested(){
    var menu = [
        {Category: "Electronics", Products:["Mobiles", "Televisions","Earbuds","Charger"]},
        {Category: "Footwear", Products:["Casuals","Formal","Sports","Running","Walking"]}
    ]
    return(
        <div className="container-fluid">
            <h2>Menu</h2>
            <ol>
                {
                    menu.map((item)=>
                        <li key={item.Category}>
                            {item.Category}
                            <ul>
                                {
                                   item.Products.map((product)=>
                                    <li key={product}>{product}</li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <hr/>
            <select>

                //optgroup is attribute of html and is used in creating dropdowns.
                {
                    menu.map((item)=>
                        <optgroup label={item.Category}>
                            {
                                item.Products.map((product)=>
                                <option>{product}</option>
                                )
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}