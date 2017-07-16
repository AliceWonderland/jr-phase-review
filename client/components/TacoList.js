import React from 'react';

export default (props) => {
  const { tacos } = props;
  return (
    <ul>
      {
        tacos.map(taco => {
          return (
            <li key={taco.id} >
              <h2>{taco.name}</h2>
            </li>
          )
        })
      }
    </ul>
  )
}
