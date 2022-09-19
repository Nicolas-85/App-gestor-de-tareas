import React from 'react'
import Item from './Item'

/*Este es el componente List devuelve una "<ul>" que sus "<li>" los están generados en otro componente Item
Recibe la prop como parámetro con los datos del state generado en el componente App. Recorremos ese dato 
que es un array de objetos y por cada elemento, ejecutamos un componente Item al cual como prop le pasamos ese dato recorrido, que en este
caso, sigue siendo un sólo elemento (objeto.) */

const List = ({listas, toogleListas}) => {
  return (
    <ul>
        {listas.map((item)=>
        <Item item={item} key={item.id} toogleListas={toogleListas}/>)}
    </ul>
  )
}

export default List