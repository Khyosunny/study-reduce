import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import {INITAL_STATE, reducer} from './store'

function App() {
  const [state, dispatch] = useReducer(reducer,INITAL_STATE)
  const { isLoading, users, error } = state

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'START_LOADING'})
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({type: 'SUCCESS', users: response.data })
      } catch(e) {
        dispatch({type: 'ERROR', error: e})
      }
    }
    fetchData()
  },[])

  if(isLoading) return <div>로딩중</div>
  if(error) return <div>에러발생</div>
  if(!users) return null
  return (
    <div>{users.map(item => {
      return <p>{item.name}</p>
    })}</div>
  );
}

export default App;
