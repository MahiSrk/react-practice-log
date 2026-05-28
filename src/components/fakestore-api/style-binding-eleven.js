import {useState} from "react";
//example of applying styles dynamically

export function StyleBindingTwo(){

    const [styles, setStyles] = useState({'fontSize':'10px','color':'black'})

    function handleFontSizeChange(e){
        setStyles({
            // so this e.target.value will take an value from slider and e.target.value will give value in number
            // and styes need pixels so we have written px

            fontSize: e.target.value + "px",
            color : styles.color
        })
    }
    function handleColorChnage(e){
        setStyles ({

            fontSize: styles.fontSize,
            color: e.target.value
            
        })
    }

    return(
        <div className="container-fluid">
           <h2>Style Binding</h2>
            <dl>
                <dt>Font Size</dt>
                <dd><input type="range" onChange={handleFontSizeChange} min="10" max="100"/></dd>
                <dt>Font Color</dt>
                <dd><input type="color" onChange={handleColorChnage}/></dd>
            </dl>
           <p className="text-center" style={styles}>Sample Text</p>
        </div>
    )
}
