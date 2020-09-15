import React, { Component } from 'react';
import './index.css';


class MealDetail extends Component {
    
render(){
    const mealDetail = this.props.meals.find((meal) => {
        // eslint-disable-next-line
        return meal.id == this.props.match.params.id;
    });
    console.log(mealDetail)
    const mealIngredients = mealDetail.Ingredients.map(ingredient => {
        return <div className="ingredients" key={ingredient.id}>
            {ingredient.amount} {ingredient.measurement} {ingredient.ingredient} 
     <i class="fas fa-trash-alt" size="sm"></i>
     </div>
    })
    // console.log(mealDetail);
    return (
        <div className="content">
            <div className="recipecard">
            <div className="recipecardmealname">
                <h1>{mealDetail.name}</h1>
            </div>
            <div className="recipecardingredients">
                <ul>{mealIngredients}</ul>
            </div>
            </div>
            <h5>Need to add a new ingredient?</h5>
            <form onSubmit={this.props.addIngredient}>
            <input type="hidden" name="mealId" value={mealDetail.id} />
                <input type="number" placeholder="amount (e.g. 1)" name="amount" />
                <input type="text" placeholder="measurement (e.g. cup)" name="measurement" /><input type="text" placeholder="ingredient (e.g. love)" name="ingredient" />
                <input type="submit" value="add ingredient"/>
            </form>
        </div>
    )}
}

export default MealDetail