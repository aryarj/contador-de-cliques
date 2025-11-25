import React, {useState} from "react";

const Contador = () =>{
    const [count, setCount] = useState(0); // estabelece o estado inicial 0
    const handleClick = ()=>{
        setCount(count+1); //incrementa de 1
    }

    return (
        <div>
            <p>Contador de cliques {count}</p>
            <button onClick={handleClick}>Clique para incrementar</button>
        </div>
    )
};

export default Contador; //Exporta o componente para ser utilizado em outros arquivos