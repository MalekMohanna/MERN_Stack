import React from 'react'
import { Link } from 'react-router-dom'
import List from '../components/List'

const Main = (props) => {
  return (
    <div>
        <Link style={{backgroundColor:'blue',color:'red',fontSize:'25px'}} to={'/create'}>Create team</Link>
        <List/>
    </div>
  )
}

export default Main