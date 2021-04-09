import React from 'react'
import './HeroHeader.css'
import StFlag from '../Img/UsFlg.png'
import { Link } from 'react-router-dom'

function HeroHeader() {
  return (
    <div className='GeneralHHDiv'>
      <div className='SubGeneralHHDiv'>
        <div className='StandardDivHold'><div className='StandardDiv'><div><img src={StFlag} alt='' width='23px' /><code>  STADARD</code></div></div></div>
        <div className='HHTextHold'>
          <div className='HHFirstTextDiv'>Coding and STEAM Curriculum</div>
          <div className='HHSecondTextDiv'>Designed for all expirence levels. CodeLab's self placed curriculm lets students learn by applying coding to core subjects</div>
        </div>
        <div className='NavDivHold'>
          <div className='NavDiv'>
            <Link to='/' style={{ color: '#fff' }}><div className='NavLink'>Elementry School</div></Link>
            <Link to='/middlesch' style={{ color: '#fff' }} ><div className='NavLink'>Middle School</div></Link>
            <Link to='/highsch' style={{ color: '#fff' }}><div className='NavLink'>High School</div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHeader
