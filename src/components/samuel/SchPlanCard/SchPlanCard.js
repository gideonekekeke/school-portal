import React from 'react'
import './SchPlanCard.css'
import 'antd/dist/antd.css';
import { Button } from 'antd'

function SchPlanCard(props) {
  return (
    <div className='SchPlanGeneralDiv'>
      <div className='SchPlanSubGeneralDiv'>
        <div className='SPTitle'>{props.SchPlan} School Plan</div>
        <div className='SPContent'>
          <li> {props.Plan1} </li>
          <li> {props.Plan2} </li>
          <li> {props.Plan3} </li>
          <li> {props.Plan4} </li>
          <li> {props.Plan5} </li>
          <li> {props.Plan6} </li>
        </div>
        <div className='SPPrePrice'> {props.StudentAmt} </div>
        <hr style={{ width: '230px' }} />
        <div className='SPPrice'><strong> {props.Amount} </strong> per school <small>up to {props.StudentsNum} </small></div>
        <Button className='SPButton' style={{ backgroundColor: '#ff8d1a', color: 'white', fontWeight: 'bold' }} >Request Quote</Button>
      </div>
    </div >
  )
}

export default SchPlanCard
