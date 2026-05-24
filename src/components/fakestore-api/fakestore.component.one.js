import {useState, useEffect} from "react"
import "./fakestore.component.one.css"

export function FakeStoreComponent(){

        const [categories, setCategories]= useState([]);
        const [products, setProducts] = useState([])  // array of objects
        function LoadCategories(){
            fetch("https://fakestoreapi.com/products/categories")
            .then((response)=> response.json())
            .then((data)=>{
                // so we are assignning this api data in setcategories so before 
                // assigining add "all" so in dropdown we get an option of "all"
                data.unshift("all");
                setCategories(data);
            })
        }

        function LoadProducts(){
            fetch("https://fakestoreapi.com/products")
            .then((response)=> response.json())
            .then((data)=>{
                setProducts(data);
            });
        }

        // mounting
        useEffect(()=>{
            LoadCategories();
            // to load products at the time of mounting
            LoadProducts();
        },[]);

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-2 bg-dark text-white mt-2">
                <div><h2>FakeStore</h2></div>
                <div>
                    <span className="me-4">Home</span>
                    <span className="me-4">Electronics</span>
                    <span className="me-4">Jwelery</span>
                    <span className="me-4">Men's Fashion</span>
                    <span className="me-4">Women's Fashion</span>
                </div>
                <div>
                    <span className="bi bi-search me-4"></span>
                    <span className="bi bi-heart me-4"></span>
                    <span className="bi bi-person me-4"></span>
                    <span className="bi bi-cart me-4"></span>
                </div>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Select Category</label>
                        <div>
                            <select className="form-select">
                                {
                                    categories.map(category=>
                                        <option key={category} value={category}>{category.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap">
                    {
                        products.map(product=>
                    <div key={product.id} className="card m-2 p-2">
                        <img src={product.image} height="150" className="card-img-top" />
                        <div className="card-header">
                            <p className="card-title">{product.title}</p>
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd><span className="bi bi-star-fill text-success"></span> {product.rating.rate} [{product.rating.count}] </dd>
                            </dl>

                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger w-100"><span className="bi bi-cart4"></span>Add to Cart</button>
                        </div>
                    </div>
                        )}
                </main>
            </section>
        </div>
    )
}