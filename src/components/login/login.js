import "./login.css"

// as login.css is in same folder so we use ./ otherwise we have to us the actual path.
// after importing the css file we have to go to startup page so we have to go to index.js and need to import and render login Component.

export function Login()
{

    // data binding in component: this is not the correct way using variable is not recommended but
    // we didnt learn any other technique so we are using variable

    var title = prompt("Enter Title")
    return(
        <div className="container-fluid">
            <form>
                <h2>{title}</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control"/></dd>
            </dl>
            <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
}