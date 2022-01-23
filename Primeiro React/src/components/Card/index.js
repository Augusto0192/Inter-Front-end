import {useState} from'react';
import Button from '../Button';


const Card = () =>{
    const[valor,setvalor] = useState(100)
    function Add(){
        setvalor(valor+1)
    }
    function Rmv(){
        setvalor(valor-1)
    }


    return(
        <div className="card">
            <div className="card-header">
             Resposta:
            </div>
            <div className="card-body">
                <h5 className="card-title">Você entende?</h5>
                <p className="card-text">

                   <Button 
                        className="btn btn-success"
                        onClick={Add}
                        >
                            
                        Sim, Posso sentir o Tao

                   </Button>   
                </p>

                <p>
                    <Button
                     className="btn btn-danger"
                     onClick={Rmv}>
                         Que merda você ta vomitando, velho?

                    </Button>
                </p>
               
            </div>
            <p className="card-text" >
                 Soul Points: {valor}
            </p>
        </div>
    )
}

export default Card;