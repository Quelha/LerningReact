import Item from "./Item"

function List() {
    
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Voltz"/>
                <Item marca="Honda"/>
                <Item marca="Yamaha"/>
            </ul>
        </>
    )
}

export default List