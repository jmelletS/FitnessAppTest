//const element = document.createElement('h1')

//element.innerText = 'Hello React...'

//const container = document.getElementById('root')

//container.appendChild(element)

import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import APP from './Components/App'



/*const user = {
  firstname: 'Jean',
  LastName: 'Mellet',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'


}*/

/*function getName(user) {
  return `${user.firstname} ${user.LastName}`

}

function getGreeting(user) {

  if (user) {
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello stranger</h1>


}*/


//const element = <div>{getGreeting(user)}</div>
/*const element = (<div>
  <h1>{getGreeting(user)}</h1>
  <img src={user.avatar}></img>
</div>)*/
const container = document.getElementById('root')





ReactDom.render(<APP />, container)