export function DataBindingObject()
{
    // so instead of defining all the variables we have to create an 
    // object in the object there is an key an a value Object in javascript means JSON

    var product = {
        "Id" : 101,
        "Name" : "LED TV",
        "Price" : 45885.00,
        "Stock" : true,    // this is boolean value
    }

    // so how to access above object an present it below
    
    return (

        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Product Id</dt>
                <dd>{product.Id}</dd>
                <dt>Product Name</dt>
                <dd>{product.Name}</dd>
                <dt>Product Price</dt>
                <dd>{(product.Stock == true)?"Available":"Out of Stock"}</dd>
            </dl>
        </div>
    )


}