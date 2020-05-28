import React from 'react';

const Card = ({name, email, id}) =>{

    return(
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/*Ahora estos son comentarios*/}
            {/*Usas el Id de tus props para cambiar las imagenes, pones el link con {} para hacerlo JS y ya te deja how cool.*/}
            <img alt = 'imageRobots' src = {`https://robohash.org/${id}200x200`}></img> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;