import React from 'react'
import { useState } from 'react'

export default function AdminCard({item}) {
    const [modal, setModal] = useState(false);
    const [del, setDel] = useState(false);

         

  return (
    <>
    <div className="adminCard">
        <div className="adminCard__Img">
            <img src={item.img} alt="" />
        </div>
        <div className="adminCard__Price">{item.price}</div>
        <div className="adminCard__Type">{item.type}</div>
        <button className="adminCard__remove" onClick={()=>setModal(true)}>Remove</button>
    </div>
    <ModalRemove 
    setModal={setModal}
    modal={modal}

    />
    </>
    )
}

function ModalRemove({setModal,setDel, modal}){
    
    return (
        <div className={`modal__remove ${true ? "show" : ""}`}>
        REMOVE
            <button onClick={()=>{
                setDel(false)
                setModal(false)
                }} className="modal__button_no">No</button>
            <button onClick={()=>{
                setDel(true)
                setModal(false)
                }} className="modal__button_yes">Yes</button>
        </div>
    )
}
