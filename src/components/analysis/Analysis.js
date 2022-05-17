import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel, FormHelperText, TextField, Container, Grid } from '@mui/material';
import { useState, useEffect } from "react"
import Check from "./Check"

function Analysis() {

    const [data, setData] = useState([])

    //"Dato1", "dato2", "dato3"

    const addCheck = e => {
        e.preventDefault();
        let ioc = e.target.ioc.value;
        let description = e.target.description.value;
        setData([
            ...data, 
            {
            ioc: ioc,
            description: description}
        ])
    }



    // {data ? data.map((check)=> <Check /> ) : <h2>Cargando...</h2>}
    return (
        <div>
            <h2> Esto es un analysis</h2>


            <form onSubmit={addCheck}>

                <Input type="text" name="ioc" />
                <Input type="text" name="description" />
                <Button type="submit" variant="contained" color="primary"> Crear!</Button>

            </form>
            {console.log(data)}

            {data ? data.map((dato, i) => {
                return <Check key={i} value={dato} />
            }) : <h2>Cargando...</h2>}






        </div>
    )
}

export default Analysis;