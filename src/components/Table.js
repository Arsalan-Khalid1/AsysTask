import { Table, Space } from 'antd'
import Spin from 'antd/es/spin'
import 'antd/es/spin/style/css'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { loadCasesByCountry } from '../store/reducers/covid/actions'
const columns = [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Cases',
    dataIndex: 'cases',
    key: 'cases',
  },
  {
    title: 'Deaths',
    dataIndex: 'deaths',
    key: 'deaths',
  },
  {
    title: 'Active',
    dataIndex: 'active',
    key: 'active',
  },
  {
    title: 'Critical',
    dataIndex: 'critical',
    key: 'critical',
  },
]

const TableC = (props) => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    props.dispatch(loadCasesByCountry())
    setloading((p) => false)
  }, [])

  return (
    <>
      {loading === true ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : (
        <Table columns={columns} dataSource={props.data} />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state?.covidData?.cases,
  }
}

export default connect(mapStateToProps)(TableC)
