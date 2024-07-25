import React from 'react'
import { Grid, Statistic } from 'semantic-ui-react'

const DisplayBalance = ({size='', color='', label='', value=''}) => {
  return (
            <Statistic size={size} color={color}>
              <Statistic.Label style={{textAlign: 'left'}}>{label}</Statistic.Label>
              <Statistic.Value>{value}</Statistic.Value>
            </Statistic>
  )
}

export default DisplayBalance
