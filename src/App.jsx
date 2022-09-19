//Dependencias
import React, {useState, useRef, useEffect} from 'react'
import {v4} from 'uuid'

//Componentes
import List from './components/List'

//Hooks
/*El componente app ejecuta un componente List y tambien un campo input más dos botones. A ese List, desde el app le pasamos una propiedad 
con el valor de un state...
*/
const App = () => {

  const [listas, setListas] = useState([{id: 1, task: 'Tarea 1°', completed: false}])
  
  const ListasTareasRef = useRef()

  useEffect(()=>{
    const traerTodos = JSON.parse(localStorage.getItem('activos'))
    if(traerTodos){
      setListas(traerTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('activos', JSON.stringify(listas))
  }, [listas]);

  const toogleListas = (id)=>{ //Recibe un id. Utilizando ese id identifica el elemento y cambia el estado del checkbox
    const newTask = [...listas];
    const estado = newTask.find((estado)=>estado.id === id)//encuentro el elemento que coincida con el id que recibo como parámetro.
    estado.completed = !estado.completed;
    setListas(newTask) 
    console.log(estado)    
  }

  const handleListasAdd = ()=> {
    const task = ListasTareasRef.current.value // valor que ingresa por el input
    // console.log(task)
    if(task === '') return
    setListas((prevListas)=>{ // utilizamos una función para que nos guarde el estado anterior, que era la primera tarea.
      return [...prevListas, {id: v4(), task, completed: false}] // hacemos la copia y sobre este le pasamos un id generado por uuid, task generado
                                                                //por el ingreso del dato por ref. y el completed, falso.
    })
    // console.log(ListasTareasRef)
    ListasTareasRef.current.value = null // igualamos a null la entrada del input para que se borre el campo.
  }

  const clearCompleted = ()=> {
    const filterList = listas.filter((task)=>!task.completed)
    setListas(filterList)
  }
  return (
    <>
        <List listas={listas} toogleListas={toogleListas}/>
        <input type="text" ref={ListasTareasRef} placeholder='Nueva Tarea'/>
        <button onClick={handleListasAdd}>+</button>
        <button onClick={clearCompleted}>-</button>
        <div>Te quedan {listas.filter((lista)=>!lista.completed).length} tareas por terminar</div>
    </>
  )
}

export default App