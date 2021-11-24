import React from "react";

import "./index.css"

function Prueba(props){
    return(
        <main>
            <div>
                <img src={props.imagenUrl} alt='hdedfe' />
                    <p>{props.nombre}</p>
                    <p>{props.edad}</p>
            </div>
        </main>
    )

}


const CAP = [

    {nombre:"Esmeralda",
     edad:"23 años",
    imagenUrl:"https://image.freepik.com/foto-gratis/disenador-grafico-femenino-sonriendo-mientras-usa-computadora-escritorio-tableta-grafica_107420-88688.jpg"
},

{
    nombre:"Sofia",
    edad:"24 años",
    imagenUrl:"https://image.freepik.com/foto-gratis/bonita-mujer-europea-cabello-lacio-mantiene-manos-cruzadas-viste-camiseta-blanca-informal-contra-pared-rosa_273609-16883.jpg"
},

{
    nombre:"Raul",
    edad:"22 años",
    imagenUrl:"https://image.freepik.com/foto-gratis/hombre-feliz-tatuaje-barba-camiseta-blanca_207634-5221.jpg"
},

{
    nombre:"Mateo",
    edad:"23 años",
    imagenUrl:"https://image.freepik.com/foto-gratis/apuesto-joven-deportista-alegre-tiene-cuerpo-deportivo-brazos-musculosos-viste-camiseta-blanca-simulada-tiene-pelo-corto-oscuro-sonrisa-atractiva-dientes-sobre-pared-purpura-espacio-copia-blanco-lado_273609-26661.jpg"
}
]

function Lista(datos){
    return(
        <>
        {datos.array.map((planta)=>{
            const {nombre, imagenUrl, id, edad} = planta;
            return(
                <Prueba nombre={nombre} imagenUrl=
                {imagenUrl} key={id} edad={edad}/>
            )
         })}
      </>
    )
}

export default function App(){
    return(
        <Lista array={CAP}/>
    )
}

