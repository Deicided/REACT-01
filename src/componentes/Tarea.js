import React from "react";
import "../hojas-de-estilo/tarea.css";
import {AiOutlineCloseCircle} from "react-icons/ai";


function Tarea({ id, texto , completada, completartarea, eliminartarea }) {
	return (
		<div className={completada ? "tarea-contenedor completada " : "tarea-contenedor"    }    >  
				<div className="tarea-texto" onClick={() => completartarea(id)} >
					{texto}
				</div>
					<div className="tarea-contenedor-inconos" onClick={() => eliminartarea(id)}  > 
							<AiOutlineCloseCircle className="tarea-icono"/>
					</div>


		</div>
	)

}


export default Tarea;