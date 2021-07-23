import React, {Fragment, useState} from "react";
import Error from "./Error";

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //Definir el state 
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Funcion que lee el presupuesto 
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value))
    }

    //Submit para definir el presupuesto 
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if (cantidad <1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
         
        
        //Si pasa la validacion 
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);



    }

        return (
            <Fragment>
                <h2>Coloca tu presupesto</h2>

                {error ? <Error mensaje="El presupuesto es inválido"/>  : null}

                <form
                onSubmit={agregarPresupuesto}
                >
                        <input
                            type="number"
                            className="u-full-width"
                            placeholder="Coloca tu presupuesto"
                            onChange={definirPresupuesto}
                        />
                        <input
                            type="submit"
                            className="button-primary u-full-width"
                            value="Definir presupuesto"

                        />
                </form>

            </Fragment>
        ); 
}

export default Pregunta;