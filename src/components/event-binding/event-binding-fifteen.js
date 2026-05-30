
export function EventBinding(){

    function InsertClick(e){
        document.write(`
                Button Id : ${e.target.id} <br>
                Button Name : ${e.target.name} <br>
                Button Value: ${e.target.value} <br>
                X Position : ${e.clientX}  <br>
                Ctrl key : ${e.ctrlKey}
            `);

         // If we want to print all the properties of event argument and its data types,value type
         for (var property in e){
            document.write("<br>--------------------------------------<br>");
            document.write(` Property Name : ${property} <br> Property Type : ${typeof property} <br> Property Value Type : ${typeof e[property]}`)
         }  
         
         // so if we pick one from above lets pick target and print its details by this way we know more about target what it consist.
         for (var property in e.target){
            document.write("<br>=======================================<br>");
            document.write(` Property Name : ${property} <br> Property Type : ${typeof property} <br> Property Value Type : ${typeof e[property]}`)
         }  
    }
    return(

        <div className="container-fluid">
            <h2>Events</h2>
            <button id="btnInsert" onClick={InsertClick} name="InsertButton" value="Insert">Insert</button>
        </div>
    )
}