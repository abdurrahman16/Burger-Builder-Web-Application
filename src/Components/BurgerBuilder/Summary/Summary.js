import React from 'react'

const Summary=(props) => {
    const ingridientSummary=props.ingridients.map(item =>{
        return (
            <li key={item.type}>
                <span style ={{textTransform: 'capitalize'}} > {item.type}</span> : {item.amount}
            </li>
        )

    })

        
  return (
    <div>
        <ul>
            {ingridientSummary}
        </ul>
    </div>
  )

}

export default Summary;