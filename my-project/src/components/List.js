import Item from "./Item"

function List() {
    
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Voltz" lancamento={2020}/>
                <Item marca="Honda" lancamento={1970}/>
                <Item lancamento={1972}/>
            </ul>
        </>
    )
}

export default List