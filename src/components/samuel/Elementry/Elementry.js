import React from 'react'
import CouresCard from '../CourcesCard/CouresCard'
// import HeroHeader from '../HeroHeader/HeroHeader'
import SchPlanCard from '../SchPlanCard/SchPlanCard'
import './Elementry.css'
import Img1 from '../Img/fimg.png'
import Img2 from '../Img/timg (1).png'
import Img3 from '../Img/timg (2).png'
import Img4 from '../Img/timg (3).png'
import Img5 from '../Img/timg (4).png'
import Img6 from '../Img/timg (5).png'
import Img7 from '../Img/timg (6).png'
import Img8 from '../Img/timg (7).png'
import Img9 from '../Img/timg (5).png'
import Img10 from '../Img/timg (1).png'
import Img11 from '../Img/timg (7).png'
import Img12 from '../Img/timg (2).png'


function Elementry() {
  return (
    <div className='GeneralElementryDiv'>
      <div className='subGeneralElementryDiv'>
        <SchPlanCard
          SchPlan='Main'
          Plan1='44 Icon, Block, & Text Coding'
          Plan2='Lesson Plan'
          Plan3='Automatic Grading'
          Plan4='School Progress Metrics'
          Plan5='Prieum traning and Support'
          Plan6='School Year Plan'
          StudentAmt='70'
          Amount='$7, 800'
          StudentsNum='600'
        />
        <CouresCard
          CourseImg={Img1}
          CourseGrade='PRE GRADE '
          Dev='Web'
          Course='Dragon Spells'
          Level='Beginner'
          Lessons='38 Lessons '
          Activites='223 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img2}
          CourseGrade='GRADES 1-2 '
          Dev='Web'
          Course='Space Cadet'
          Level='Beginner'
          Lessons='8 Lessons '
          Activites='74 Activities'
          Content='Picture Based Samuue with fun adventures and colourfull Boy'
        />
        <CouresCard
          CourseImg={Img3}
          CourseGrade='GRADES 2-3 '
          Dev='Mobile'
          Course='Programming 102'
          Level='Intermidate'
          Lessons='58 Lessons '
          Activites='844 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img4}
          CourseGrade='GRADES 3-8 '
          Dev='Web'
          Course='micro:bit 101'
          Level='Intermidate'
          Lessons='67 Lessons '
          Activites='987 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img5}
          CourseGrade='GRADES 0-5 '
          Dev='Web'
          Course='Augmented Reality'
          Level='Advance'
          Lessons='80 Lessons '
          Activites='234 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img6}
          CourseGrade='GRADES 3-6 '
          Dev='Mobile'
          Course='micro:bit 101'
          Level='Beginner'
          Lessons='57 Lessons '
          Activites='234 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img7}
          CourseGrade='GRADES 5-9 '
          Dev='Web'
          Course='Earth Science 101'
          Level='Sen Dev'
          Lessons='898 Lessons '
          Activites='34 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img8}
          CourseGrade='PRE GRADE '
          Dev='Mobile'
          Course='English 201'
          Level='Beginner'
          Lessons='38 Lessons '
          Activites='223 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img9}
          CourseGrade='PRE GRADE '
          Dev='Web'
          Course='Physical Science 201'
          Level='Advance'
          Lessons='67 Lessons '
          Activites='348 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img10}
          CourseGrade='GRADES 4-6 '
          Dev='Web'
          Course='Social Studies 101'
          Level='Beginner'
          Lessons='67 Lessons '
          Activites='456 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img11}
          CourseGrade='GRADES 3-4 '
          Dev='Web'
          Course='Social Studies 101'
          Level='Beginner'
          Lessons='56 Lessons '
          Activites='876 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
        <CouresCard
          CourseImg={Img12}
          CourseGrade='GRADES 6-4 '
          Dev='Web'
          Course='Math 101'
          Level='Beginner'
          Lessons='66 Lessons '
          Activites='231 Activities'
          Content='Picture Based Coding with fun adventures and colourfull character'
        />
      </div>
    </div>
  )
}

export default Elementry
