import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import data from '../components/todolist/sampledata.json'

const Dashboard: NextPage = () => {
  const initialState: any = {
    l: [],
    sel: -1
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (data?.lists.length > 0) {
      console.log(data.lists)
      setState({...state, l: data.lists})
    }
  }, [state])

  const renderLists = () => {
    if (state?.l.length === 0) return "No lists found"
    
    let out = state.l.map((e: any, i: number) => {
      return (
        <button 
          key={i} 
          onClick={() => setState({...state, sel: i})}
        >
          List {i}: {e.length} items(s)
        </button>
      )
    })

    return out
  }

  const renderTodos = (idx = -1) => {
    if (idx === -1) return "No Todo List Selected"
    if (idx > state.length) return "Todo List Index out of Range"

    let out = state.l[idx].map((e: any, i: number) => {
      return (<li key={i}>{e.todo}</li>)
    })
    
    return out
  }

  return (
    <div>
      <h1>Dashboard</h1>
      { renderLists() }
      { renderTodos(state.sel) }
    </div>
  )
}

export default Dashboard