import React from 'react'

/*Este es el componente Item que recibe una prop por parámetro con un dato que es producto de array recorrido. Como ese dato es un 
objeto lo desestructuramos obteniendo sus tres elementos. De los tres elementos, utilizamos "task y lo devolvemos en un <li>
*/
const Item = ({item, toogleListas}) => {
    const {id, task, completed} = item

    const handleChecked = ()=>{
      toogleListas(id)
      console.log(item)
    }

  return (
    <>
      
      <li>
        <input type="checkbox" checked={completed} onChange={handleChecked}/>
        {task}
      </li>
    </>
  )
}

export default Item