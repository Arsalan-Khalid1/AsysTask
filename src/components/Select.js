import { Select } from 'antd'
import { connect } from 'react-redux'
import { sort } from '../store/reducers/covid/actions'
const { Option } = Select

const SelectC = (props) => {
  function handleChange(value) {
    console.log(`selected ${value}`)
    props.dispatch(sort(value))
  }

  return (
    <div>
      <label style={{ marginRight: '0.5em' }}>Sort By:</label>
      <Select
        defaultValue="Country"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="country">Country</Option>
        <Option value="cases">Cases</Option>
        <Option value="deaths">Deaths</Option>
        <Option value="active">Active</Option>
      </Select>
    </div>
  )
}

export default connect()(SelectC)
