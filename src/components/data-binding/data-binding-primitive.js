export function DataBinding(){
// If we do same thing with javascript or jQuery lot of DOM is required but in react simply a binding expression.
// Primitive types    
    var id=1;
    var name = 'Oneplus TV';
    var price ='4500.54';
    var stock = true;

    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Product Id</dt>
                <dd>{id}</dd>
                <dt>Product Name</dt>
                <dd>{name}</dd>
                <dt>Price</dt>
                <dd>{price}</dd>
                <dt>Stock Available</dt>
                {/* so here stock is a ternary operator so we can write an expression so expression we had written is if stock is 
                equal to true the we display a word Available else Out of Stock. */}
                <dd>{(stock==true)?"Available":"Out of Stock"}</dd>
            </dl>
        </div>
    )
}