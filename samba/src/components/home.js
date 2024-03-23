import React from 'react'
import { useNavigate } from 'react-router-dom'
import Style from "./login.module.css"

const { cnpj } = require('cpf-cnpj-validator');

const Home = (props) => {
  const { loggedIn, email } = props


  return (
    <div className="mainContainer">
      <form className= {Style.formcnpj}>
        <input type="text" name="cnpjj" placeholder='CNPJ'/>
      </form>
    </div>
  )
}

export default Home
