import React, {useState} from 'react';
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    
    const [nombre, guardarNombre] = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    
    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || nombre.trim()==="" || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
            guardarError(false);

        //Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //Pasar el gasto al componente principal 
        guardarGasto(gasto);
        guardarCrearGasto(true);
        
        //Resetear el formulario
        guardarCantidad(0);
        guardarNombre("");
    }
    
    return (  

        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

                {error ? <Error mensaje="Todos los campos son obligatorios o presupuesto inválido"/>
                : null }

            <div className="gasto">
                <label>Nombre Gasto</label>
                <input
                type="text"
                className="u-full-width"
                placeholder="Ej.Comida"
                value={nombre}
                onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="gasto">
                <label>Cantidad Gasto</label>
                <input
                type="number"
                className="u-full-width"
                placeholder="Ej.300"
                value={cantidad}
                onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
            type="submit"
            className="button-primary u-full-width"
            value="Agregar gasto"
            />

        </form>
    );
}
 
export default Formulario;