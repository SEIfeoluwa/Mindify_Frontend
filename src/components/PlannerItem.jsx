import React from 'react'

const PlannerItem = (props) => {
  return (
    <ul className="goal-item">
           {props.goals.map((goal, index) => (
        <li key={index}>
          {goal} 
          <button className="g-btn" onClick={ () => props.removeGoal(index) }>
            Goal achieved!
          </button>
        </li>
      ))}
    </ul>
  )
}

export default PlannerItem