import { Statistic, Card, Row, Col } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { loadSummaryGlobal } from '../store/reducers/covid/actions'

function Statistics(props) {
  useEffect(() => {
    props.dispatch(loadSummaryGlobal())
  }, [])
  return (
    <>
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Recovered"
                value={props.summary.recovered}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix=""
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Deaths"
                value={props.summary.deaths}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix=""
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    summary: state.covidData.summary,
  }
}

export default connect(mapStateToProps)(Statistics)
