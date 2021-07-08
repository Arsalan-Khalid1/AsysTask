import React, { useState } from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import {
  searchByCountry,
  searchReduced,
  searchReset,
} from '../store/reducers/covid/actions'

function SearchInput(props) {
  const [input, setinput] = useState('')

  const handleOnChange = (e) => {
    console.log(e)
    const value = e.target.value
    console.log(value)
    if (value === '') props.dispatch(searchReset())
    else props.dispatch(searchByCountry(value))
    setinput(value)
  }

  const handleOnPress = (e) => {
    const value = e.target.value
    console.log('handleOnPress===>', value)
    const key = e.keyCode || e.charCode
    if (key == 8 || key == 46) props.dispatch(searchReduced(input))
  }

  return (
    <div style={{ display: 'flex' }}>
      <label>Search here:</label>
      <Input
        size="small"
        value={input}
        onChange={handleOnChange}
        onKeyUp={handleOnPress}
      />
    </div>
  )
}

export default connect()(SearchInput)
