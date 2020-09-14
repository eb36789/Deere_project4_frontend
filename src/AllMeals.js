import React, { Component } from 'react';
import './index.css';
import { Link } from "react-router-dom";


class AllMeals extends Component {
render(){
    const allMeals = this.props.meals.map((meal) => {
        return <div key={meal.id}>
            <div className="AllMealsPage">
                <Link to={`/meals/${meal.id}`}>
                <div className="card">
            <img src="/images/placeholder.png" alt="No Image Available" />
            <div className="container">
                {meal.name}
                </div>
                </div>
                </Link>
                </div>
                </div>;
    })
    return (
        <div className="AllMealsPage">
          <span><h1> YUM! YUM! YUM!</h1> <h6>(click meal name to see ingredients list)</h6></span>
          <form onSubmit={this.props.addMeal}>
            {/* <input type="hidden" name="ingredient" value="add ingredient(s) for this meal" /> */}
                <input type="text" name="name" />
                <input type="submit" value="add meal"/>
            </form>
            <div className="gallery">
                {allMeals}
                </div>
                    <h3>Want to create a new meal?</h3>
        </div>
    )
}
}

export default AllMeals