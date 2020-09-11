import React, { Component } from 'react';
import './index.css';
import { Link } from "react-router-dom";


class AllMeals extends Component {
render(){
    const allMeals = this.props.meals.map((meal) => {
        return <li key={meal.id}>
            <Link to={`/meals/${meal.id}`}>{meal.name}</Link></li>;
    })
    return (
        <div>
          <h1> YUM! YUM! YUM!</h1>
          <h6>(click meal name to see ingredients list)</h6>
            <ul>{allMeals}</ul>
            <h3>Want to create a new meal?</h3>
            <form onSubmit={this.props.addMeal}>
            {/* <input type="hidden" name="ingredient" value="add ingredient(s) for this meal" /> */}
                <input type="text" name="name" />
                <input type="submit" value="add meal"/>
            </form>
        </div>
    )
}
}

export default AllMeals