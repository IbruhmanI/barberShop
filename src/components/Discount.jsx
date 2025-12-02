import React from 'react'
import cutPic from '../assets/image/cut-pic.webp'
import { FiArrowUpRight } from "react-icons/fi";

export const Discount = () => {
  return (
    <div id="discount">
        <div className="discount">
            <div className="disc-img">
                <img src={cutPic} alt="" />
            </div>
            <div className="discount-info">
                <h4>Скидка на стрижку при первом посещении — 15%</h4>
                <span>(Скидка не распространяется на топ барберов)</span>
                <button className="btn disc-btn">Записаться <FiArrowUpRight size={24}/></button>
            </div>
        </div>
    </div>
  )
}
