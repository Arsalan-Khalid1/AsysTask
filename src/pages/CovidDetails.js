import React from 'react'
import Table from '../components/Table'
import Select from '../components/Select'
import SearchInput from '../components/SearchInput'

export default function CovidDetails() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBottom: '3em',
        }}
      >
        <Select />
        <SearchInput />
      </div>
      <Table />
    </>
  )
}
