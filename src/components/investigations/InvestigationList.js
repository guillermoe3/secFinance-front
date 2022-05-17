import {useState, useEffect, isValidElement} from "react"




function InvestigationList(){

    const [list, setList] = useState("");

    const url = "http://localhost:3004/investigations";
    
    const fetchApi = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setList(data);
      console.log(data)
    }
    useEffect(()=>{fetchApi()},[])





    return (
        <div>
             Listado de investigaciones
            <ul>

            {list ? list.map( (inv)=><ul key={inv.id_investigation}> 

                    <li>
                    Fecha de creación: {inv.date_creation}
                    </li>
                    <li>Descripción: {inv.description} 
                    </li>
            
            
            </ul> ) : "No hay datos"}

                
            </ul>
           
        </div>
    )
}

export default InvestigationList;