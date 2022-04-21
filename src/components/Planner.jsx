import React from 'react'
import { useState, useEffect } from 'react'
import PlannerItem from './PlannerItem'

const Planner = () => {
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
         
 

  return (
    <div className="goals-container">
        
         <form className="goals-form">
         <h3 className="title">Your goals for this week:</h3>
      <input className="input3" type="text" name="goal" onChange={handleChange}/>
      <button className="g-btn" onClick={(e) => addGoal(e) }>Add</button>
      <PlannerItem  goals={goals}  removeGoal={removeGoal}/>
      <img className="quote" src=" https://quotefancy.com/media/wallpaper/3840x2160/822-Nelson-Mandela-Quote-It-always-seems-impossible-until-it-s-done.jpg"></img>
      </form>
    </div>
  )
}

export default Planner