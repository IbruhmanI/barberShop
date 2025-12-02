import React from 'react'
import img1 from '../assets/image/Main-pic.webp'
import img2 from '../assets/image/main-pic2.webp'

const FirstCut = () => {
  return (
    <div id="first-cut">
      <div className="container">
        <div className="first-cut">
          <div>
            <p>Бишкек, Улица Шабдан баатыра 192/2</p>
            <h1>Создайте идеальный образ в нашем барбершопе!</h1>
          </div>
          <div>
            <div className='first-cut-discount'>
              <img src={img2} alt="" />
              <div>
                <h3>Скидка на первую стрижку у нас — 15%</h3>
                <button className='btn' >Записаться</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstCut
