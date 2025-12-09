import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md"; 

const Job = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [number, setNumber] = React.useState('')
  const sendData = (e) => {
    e.preventDefault()
    console.log(
      {
        id: Date.now(),
        name: name,
        email: email,
        number: number
      }
    )
  }
  return (
   <div id="job">
    <div className="container">
      <div className="job">
        <div className="job-wrapper">
          <h1 className="job-title">хочешь работать в команде?</h1>
          <div className="job-form">
            <div className="job-address">
              <span className="job-gmail"><div className="job-icon"><MdOutlineMail size={24}/></div> Barber@gmail.com</span>
              <span className="job-number"><div className="job-icon"><FaPhoneAlt size={24}/></div> +996 700-00-00-00</span>
            </div>
            <form id='form'>
              <h2>Оставьте заявку и мы свяжемся с вами</h2>
              <label htmlFor="">
                <span>Ваше Имя</span>
                <input type="text" placeholder='Ваше имя' onChange={(e) => setName(e.target.value)}/>
              </label>
              <label htmlFor="">
                <span>Ваш Email</span>
                <input type="text" placeholder='barber@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
              </label>
              <label htmlFor="">
                <span>Номер телефона</span>
                <input type="text" placeholder='0700 00 00 00' onChange={(e) => setNumber(e.target.value)}/>
              </label>
              <button className='btn send-btn' onClick={(e) => sendData(e)}>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Job
