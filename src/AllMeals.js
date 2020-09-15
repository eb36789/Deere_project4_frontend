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
                 <img src=
                //  '{meal.image}' onError="this.src=
                "/images/placeholder.png" alt="No meal view available" />
            <div className="container">
                {meal.name}
                </div>
                </div>
                </Link>
                </div>
                </div>;
    })
    return (
        <div className="Content">
          <h3>Want to create a new meal?</h3>
          <form onSubmit={this.props.addMeal}>
                <input type="text" name="name" />
                <input type="submit" value="add meal"/>
            </form>
            <div><h1> YUM! YUM! YUM!</h1> <h4>Click a meal to see ingredients list</h4> </div>
            <div className="gallery">
                {allMeals}
                </div>
        </div>
    )
}
}

export default AllMeals