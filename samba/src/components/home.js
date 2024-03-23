import React from 'react'
import { useNavigate } from 'react-router-dom'
import Style from "./login.module.css"

const Home = (props) => {
  const { loggedIn, email } = props


  return (
    <div className="mainContainer">
      <form className= {Style.formcnpj}>
        <input type="text" name="cnpj" placeholder='CNPJ'/>
      </form>
    </div>
  )
}

export default Home
