import React from 'react'

let PlannedMeal = ({ item }) => {
    return (
      <div className='dailyMealCard'>
        <div className='card-front'>
           <h3> {(item.name)} </h3>
        </div>
        <div className='card-back'>
          <h3><strong>{(item.ingredients)}</strong> </h3>
        </div>
      </div>
    )
  }
  
export default PlannedMeal