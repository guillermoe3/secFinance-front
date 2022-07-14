import {useState, useEffect} from "react"

function Test() {

    const [business, setBusiness] = useState([]);

    const getBusiness = async () => {
        const response = await fetch("http://localhost:3004/business")
        const data = await response.json();
        console.log("esto es data")
        console.log(data)
        setBusiness(data)
        console.log("esto es business")
        console.log(business)
        
    }


    useEffect( () => {
        getBusiness();
    }, []);

    return (
        <div>

            <p>Hola!</p>

            {business.map( (dato) => 
                <p>{dato.name}</p>
            )}



            
        </div>
    )
}

export default Test
