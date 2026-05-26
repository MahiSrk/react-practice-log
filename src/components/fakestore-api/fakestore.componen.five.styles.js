import {useState, useEffect} from "react"
import "./fakestore.component.one.css"
import $ from "jquery";
import axios from "axios";

// in majority of companies we didnt see companies are using jquery,Ajax for api data handling we see thay
// are using third party like axios to kow other third parties visit npmjs.com search react api we will see so many options.



export function FakeStoreComponentFive(){

        const [categories, setCategories]= useState([]);
        const [products, setProducts] = useState([])  // array of objects
        //whatever items user is adding that cart items must be added in the array
        const [cartItems,setCartItems] = useState([]);
        //another state for cart Count initially cart count is 0
        const [cartCount,setCartCount] = useState(0);

      //  function for get cart count

      function GetCartCount(){
        setCartCount(cartItems.length);
      }

        function LoadCategories(){

            axios.get("https://fakestoreapi.com/products/categories",)
            // this axios uses promises so if anyone is using promises they do not have callback function.
            // the .then is executed when sucess is fullfiled.
            .then((response)=>{
                // axios response contains lot of details like data,status,headers,request,config,... we can see it on console by executing below line.
                //axios can handle multiple request at a time.
                // console.log(response);
                response.data.unshift("all");
                setCategories(response.data);
            })
            // if we want to track any problem then we can use catch.
            .catch((err)=>
            {
                console.log(err);
            })
            //we can also use finally it is used to define actions to perform when success or failuse in both cases it will work.
            /* .finally(()=>
             {
                 //some code/ some actions.
             }) */
        }

// Load products will take the url according to our requirement

        function LoadProducts(url){
            fetch(url)
            .then((response)=> response.json())
            .then((data)=>{
                setProducts(data);
            });
        }

        // mounting
        useEffect(()=>{
            LoadCategories();
            // to load products at the time of mounting
            LoadProducts("https://fakestoreapi.com/products");
            // when to update the cart count so we need to define on useEffect
            GetCartCount();
        },[]);

        // by using event argunent we can collect its value this evnt will return the category we selected.
        function handleCategoryChange(event){
            // this will load the products which are selected from category dropdown
            if(event.target.value == "all"){
                    LoadProducts("https://fakestoreapi.com/products")
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${event.target.value}`)
            }
        }

        function handleAddToCartClick(e){
            fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then((response)=> response.json())
            .then(data=>{
                cartItems.push(data);
                //for count++ the getCartCount function is called
                GetCartCount();
                alert(`${data.title}\nAdded to Cart`)
            })

        }
        function handlerHomeClick(){
            LoadProducts("https://fakestoreapi.com/products");
        }

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-2 bg-dark text-white mt-2">
                <div><h2>FakeStore</h2></div>
                <div>
                    <span className="me-4"><button onClick={handlerHomeClick} className="btn text-white">Home</button></span>
                    <span className="me-4"><button className="btn text-white">Electronics</button></span>
                    <span className="me-4"><button className="btn text-white">Jewelery</button></span>
                    <span className="me-4"><button className="btn text-white">Men's Fashion</button></span>
                    <span className="me-4"><button className="btn text-white">Women's Fashion</button></span>
                </div>
                <div>
                    <span className="bi bi-search me-4"></span>
                    <span className="bi bi-heart me-4"></span>
                    <span className="bi bi-person me-4"></span>
                    <button data-bs-target="#cart" data-bs-toggle="modal" className="btn btn-light position-relative">
                        <span className="bi bi-cart me-4"></span>
                        <span className="badge rounded-circle bg-danger position-absolute">{cartCount}</span>
                        </button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="text-primary">Your Cart Items</h2>
                                    <button data-bs-dismiss="modal" className="btn-close"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map(item=>
                                                    <tr>
                                                        <td>{item.title}</td>
                                                        <td><img src={item.image} width="50" height="50" /></td>
                                                        <td>{item.price}</td>
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
                            </div>
                        </div>
                    </div>
                </div>
            </header>
             {/* Inline styles binding in react */}
            <h1 style={{color:'red',fontFamily:'cursive',fontStyle:'italic'}}>Welcome</h1>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
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
                            <button id={product.id}onClick={handleAddToCartClick} className="btn btn-danger w-100"><span className="bi bi-cart4"></span>Add to Cart</button>
                        </div>
                    </div>
                        )}
                </main>
            </section>
        </div>
    )
}