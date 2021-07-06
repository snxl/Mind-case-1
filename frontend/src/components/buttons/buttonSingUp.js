export default function ButtonSingUp(props){

    return(
        <div>

            <button onClick={()=> props.data(props.value + 1)} type="submit" >CADASTRAR</button>

            <p> {props.value} </p>
        </div>
    )
    
}


