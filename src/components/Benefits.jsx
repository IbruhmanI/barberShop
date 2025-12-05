import React from 'react'
import img1 from '../assets/image/benefits-img1.webp'
import img2 from '../assets/image/benefits-img2.webp'
import img3 from '../assets/image/benefits-img3.webp'
import img4 from '../assets/image/benefits-img4.webp'

const Benefits = () => {
  const pros = [
    { id: 1, title: 'Мы — профи',img: img1, text: 'В нашей команде исключительно опытные барберы, которые постоянно повышают квалификацию.' },
    { id: 2, title: 'безопасный уход',img: img2, text: 'Используем только натуральные средства для ухода за волосами и бородой, которые подарят вам стиль.' },
    { id: 3, title: 'Удобная запись', img: img3,text: 'Оформляйте запись на услуги через наш сайт. Мы предлагаем гибкую систему оплаты и прозрачные цены.' },
    { id: 4, title: 'зона отдыха',img: img4, text: 'Наша зона отдыха предлагает освежающие напитки и настольные игры, чтобы вы могли расслабиться.' },
  ]
  return (
    <div id="benefits">
      <div className="container">
        <div className="benefits">
          <p>Преимущества</p>
          {pros.map(item => (
            <div key={item.id}>
              <p>0{item.id}</p>
              <h1>{item.title.toUpperCase()}</h1>
              <p className='benefits-text'>{item.text}</p>
              <div className='benefits-img'>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
          <button className='btn'>Записаться</button>
        </div>
      </div>
    </div>
  )
}

export default Benefits
