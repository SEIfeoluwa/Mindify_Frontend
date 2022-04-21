import React from 'react'
import { useState, useEffect } from 'react'
import PlannerItem from './PlannerItem'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const Planner = () => {

    const current = new Date();
    const getDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [date, setDate] = useState(new Date())

 const [goals, setGoals] = useState([
          'Do more yoga',
          'Study',
          'Try Meditating'
        ])
     
       const [getGoal, changeGoal] = useState('')
     
        const addGoal = (event) => {
            event.preventDefault()
          let newList = [...goals, getGoal] 
          console.log(newList)
              setGoals(newList) 
             
        }
     
         const handleChange = (event) => {
           changeGoal(event.currentTarget.value) 
          
        }
     
         const removeGoal = (index) => {
           let goalList = [...goals] 
           goalList.splice(index, 1)
           setGoals(goalList)
         }
         
   

   useEffect(() => {
       localStorage.setItem("goals", JSON.stringify(goals))
   }, [goals])
 
let aGoal

 
  return (
    <div className="goals-container">
        
         <form className="goals-form">
         <div className="date">{getDate}</div>
         <h3 className="title">Your goals for this week:</h3>
      <input className="input3" type="text" name="goal" onChange={handleChange}/>
      <button className="g-btn" onClick={(e) => addGoal(e) }>Add</button>
      <PlannerItem  goals={goals}  removeGoal={removeGoal}/>
      <img className="quote" src=" https://quotefancy.com/media/wallpaper/3840x2160/822-Nelson-Mandela-Quote-It-always-seems-impossible-until-it-s-done.jpg"></img>
      </form>
      <div className="cal-wrapper">
      <Calendar className="calendar"  onChange={setDate} value={date} />
      </div>
     
    </div>
  )
}
 
export default Planner