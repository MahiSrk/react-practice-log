import { useState } from "react";

export function ClassBindingComponent()
{

    const [theme,setTheme]= useState('');
    const [buttonTheme,setButtonTheme]= useState('btn btn-dark w-100');

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme("bg-dark text-white p-3");
            setButtonTheme('btn btn-light w-100');
        }else{
            setTheme('');
            setButtonTheme('btn btn-dark w-100');
        }
    }
    function handleNameChange(e){
        if(e.target.value==''){
            setTheme('bg-danger text-white p-2')
        }else{
            setTheme('bg-success text-white p-2')
        }
    }

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:'500px'}}>
                <form className={theme}>
                    <div className="mt-4 mb-4 form-switch" onChange={handleThemeChange}>
                        <input type="checkbox" className="form-check-input"/> Dark Mode
                    </div>
                    <h2><span className="bi bi-person-fill"></span>User Login</h2>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" className="form-control" onChange={handleNameChange}></input></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control"></input></dd>
                    </dl>
                    <button className={buttonTheme}>Login</button>
                </form>
            </div>
        </div>
    )
}