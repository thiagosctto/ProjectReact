import Item from "./Item"


function List(){

    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={2023}/>
                <Item marca="Fiat" anoLancamento={1456}/>
                <Item/>
            </ul>
        </>
    )
}

export default List