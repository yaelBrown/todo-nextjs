import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import dataJSON from '../components/todolist/sampledata.json'
import { renderAvailableLists } from '../utils/todoListUtils'

const todolistPage: NextPage = () => {
  
  const [data, setData] = useState([])

  useEffect(() => {
    if (dataJSON && dataJSON > 0) {
      console.log(dataJSON)
      setData(dataJSON)
    } 
  })

  return (
    <div>
      <h1>TodoList</h1>
      { renderAvailableLists(data) }
    </div>
  )
}

export default todolistPage 