import React, { Component } from 'react';
import './index.css';


class MealDetail extends Component {
    
render(){
    const mealDetail = this.props.meals.find((meal) => {
        return meal.id == this.props.match.params.id;
    });
    const mealIngredients = mealDetail.Ingredients.map(ingredient => {
        return <li key={ingredient.id}>{ingredient.amount} {ingredient.measurement} {ingredient.ingredient}</li>
    })
    // console.log(mealDetail);
    return (
        <div>
            <h1>ingredients for {mealDetail.name}</h1>
            <ul>{mealIngredients}</ul>
            <h5>add a new ingredient here</h5>
            <form onSubmit={this.props.addIngredient}>
            <input type="hidden" name="mealId" value={mealDetail.id} />
                <input type="text" name="ingredient" />
                <input type="submit" value="add ingredient"/>
            </form>
        </div>
    )}
}

export default MealDetail