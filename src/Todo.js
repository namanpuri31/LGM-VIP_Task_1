import './style.css';
import React, { useState } from 'react';
function Todo() {
  const styling = {

    color: "#243c64"

  }
  const width={
    minWidth:"50vw"
  }
  const [Input, setInput] = useState("")
  const [Item, setItem] = useState([])
  const addItem = () => {
    if (!Input) {
      alert("Enter the data to add to the todo list!")
    }
    else {
      const myNewData={
        id:new Date().getTime().toString(),
        name:Input
      }
      setItem([...Item, myNewData])
      setInput("")
    }
  }
  const deleteItem=(index)=>{
       const deleteItems=Item.filter((currele)=>{
        return currele.id !== index
       }) 
       setItem(deleteItems)

  }
  const removeall=()=>{
    setItem([])
  }
  const edititem=(id)=>{
    const itemedited=Item.find((curele)=>{
      return curele.id===id
    })
    setInput(itemedited.name)
    const removeit=Item.filter((curele)=>{
      return curele.id !== id
    })
    setItem(removeit)
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>ADD YOUR LIST HERE</figcaption>
          </figure>
          <div className="addItems" ><input style={width} type="text" placeholder='✍ Add Item' className='form-control' value={Input} onChange={(event) => setInput(event.target.value)} />
            <i className="fa fa-plus add-btn" style={styling} onClick={addItem}></i>
          </div>
          {/* show items here */}
          <div className="showItems">
            {
              Item.map((currentelement) => {
                return(
                <div className="eachItem" style={width} key={currentelement.id}>
                  <h3>{currentelement.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={()=>edititem(currentelement.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currentelement.id)}></i>

                  </div>
                </div>
                )
              })
            }

          </div>
          {/* delete items here */}
          <div className="showItems"><button className='btn effect04' data-sm-link-text="Remove All" onClick={removeall}><span>CHECK LIST</span></button></div>
        </div>
      </div>
    </>
  );
}

export default Todo;
