import React from 'react';
import Card from './Card';

const CardList = ({ robots }) =>{
    return(
        <div>
            {
            robots.map((user, i)=>{
                return (<Card 
                    key = {i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}/>
                );
                //Debes de poner un key 'i',   a cada loop para que sepa identificar los robots uno por uno
                //Si no lo pones igual va a jalar, pero si haces un cambio va a tener que cehcar en todos y reiniciar el doom
                //De lo contrario si tiene una key puede encontrar solo esa y modificar solo esa
                })
            }
        </div>
    );
}

export default CardList;