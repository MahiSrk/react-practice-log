import {useState} from "react";

export function StyleBinding(){

    const[userName, setUserName]= useState('');
    // the object should contain border
    const[styleObject,setStyleObject] = useState({'border':'','boxShadow':''});

    function VerifyName(e){
        setUserName(e.target.value);
        if(userName==""){
            setStyleObject({
                border: '2px solid red',
                boxShadow: '2px 2px 2px red'
            })
        }else {
             setStyleObject({
                border: '2px solid green',
                boxShadow: '2px 2px 2px green'
        })

    }
}
    return(
        <div className="container-fluid">
            <dl>
                <dt>
                    User Name
                </dt>
                <dd><input type="text" style={styleObject} onBlur={VerifyName}/></dd>
                <dd></dd>
            </dl>
        </div>
    )
}
