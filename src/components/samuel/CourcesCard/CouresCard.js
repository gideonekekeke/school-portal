import React from 'react'
import './CouresCard.css'
// import CourseImg from '../Img/fimg.png'

function CouresCard(props) {
  return (
    <div className='GeneralCoursecardDiv'>
      <div className='SubGeneralCoursecardDiv'>
        <div className='CourseCardImageDiv'> <img src={props.CourseImg} alt="" style={{ height: '162px', width: '272px', objectFit: 'cover', borderRadius: '3px 3px 0px 0px' }} /> </div>
        <div className='CCAftImgDiv'>
          <div className='CCAftImgDivHold'>
            <div> {props.CourseGrade} </div>
            <div>{props.Dev}</div>
          </div>
        </div>
        <div className='CCTextDivHold'>
          <div className='CCTextDiv'>
            <div className='CCTextTitle'> {props.Course} </div>
            <div className='CCTextSubTitle'> {props.Level} <li> {props.Lessons} </li> <li> {props.Activites} </li> </div>
            <div className='CCTextContent'> {props.Content} </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouresCard
