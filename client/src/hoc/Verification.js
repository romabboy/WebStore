import React, { useState } from 'react'
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Verification({children}) {
    const [logIn, setLogIn] = useOutletContext();
    

    console.log(logIn)

    if(!logIn){
        return <InputLogIn setLogIn={setLogIn}/>
    }

  return (
    <div className="verefication">
        {children}
    </div>
  )
}


function InputLogIn({setLogIn}){
   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("")
   


    const sendDataOnServer = () => {
        const data = async () => {
            const response = await fetch(process.env.REACT_APP_URL_ADMIN,{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({login, password})
            })

            const admin = await response.json();
            return admin.admin;
        } 
        data().then(
            admin => {
                setLogIn(admin)
                if(admin.password){
                    sessionStorage.setItem("password",admin.pasword)
                }
            }
        )
        
    }

    return (
        <div className="verefication__filed">
            <form className='verefication__form' action="#" onSubmit={e => e.preventDefault()}>
                <input type="text" onChange={e => setLogin(e.target.value)} className="verefication__login" />
                <input type="password" onChange={e => setPassword(e.target.value)} className="verefication__password" />
                <input type="submit" onClick={sendDataOnServer} value={"Send"}/>
            </form>
        </div>
    )
}

