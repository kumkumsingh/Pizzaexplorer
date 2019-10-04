import { combineReducers } from 'redux'
import pizzas from './pizzas'
import selectedPizza from './selected-pizza'

export default combineReducers({
   //it determines the name of the state property
    pizzas,
    selectedPizza
  })