export function NetflixHeader(){
    return(
        <div className="d-flex justify-content-between p-4">
           <div>
                Netflix
           </div>
           <div>
                <div className="input-group me-2">
                    <select className="me-2 form-select rounded-1">
                        <option>Language</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Marathi</option>
                    </select>
                    <button className="btn btn-danger rounded-1">Sign in</button>
                </div>
           </div>
        </div>
    )
}