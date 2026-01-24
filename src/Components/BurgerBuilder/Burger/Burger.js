import React from 'react'
import Ingredient from '../Ingredient/Ingredient'   
import './Burger.css'

const Burger = props => {
  let ingridientArr = props.ingridients
    .map(item => {
      let amountArr = [...Array(item.amount).keys()]
      return amountArr.map(_ => (
        <Ingredient key={Math.random()} type={item.type} />
      ))
    })
    .reduce((arr, element) => arr.concat(element), [])

  if (ingridientArr.length === 0) {
    ingridientArr = <p>Please start adding ingredients!</p>
  }

  return (
    <div className='Burger'>
      {/* FIXED TOP */}
      <Ingredient type="bread-top" />

      {/* DYNAMIC INGREDIENTS */}
      {ingridientArr}

      {/* FIXED BOTTOM */}
      <Ingredient type="bread-bottom" />
    </div>
  )
}

export default Burger
