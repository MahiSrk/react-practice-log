export function DataBindingInHtmlByReact()

// so in react it is necessary not mandetory but every repeating item must have an unique key
// otherwise it will show warning on console we have given key={category} as key
{
    var categories = ["Electronics","Footware","Fashion"];

    return(
        <div className="container-fluid">
            <h2>Categories</h2>

            <div>
                {
                    categories.map((category)=>
                    <button key={category} className="btn btn-danger mb-2 d-block w-25">{category}</button>
                    )
                }
            </div>

            <ul className="list-unstyled">
                {
                    categories.map((category)=>
                    <li key={category}><a href="#">{category}</a></li>
                    )
                }
            </ul>

            <ul className="list-unstyled">
                {
                    categories.map((category)=>
                    <li key={category}><input type="checkbox"/> {category}</li>
                    )
                }
            </ul>

            <ol>

                {/* so in this method we are going to access all the elements using array
                so in js how many array methods are used to access/read the elements from an array the methods are
                toString(),map(),join() so by using map method we using to read all elements from array
                map is a callback function, it is a iterator so in binding expression we recommand arrow technique 
                so this will return an list item and we just have to present/put the category name.
                */}
                {
                    categories.map((category)=>
                    <li key={category}>{category}</li>)
                }
            </ol>
            {/* If i want to present same thing in dropdown how can i do it */}

                <select>
                    {
                        categories.map((category)=>
                            <option key={category}>{category}</option>)
                    }
                </select>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Categories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category) =>
                                <tr key={category}>
                                    <td>{category}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>

        </div>
    )
}