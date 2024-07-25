import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

const DisplayBalances = () => {
  return (
    <Segment textAlign='center'>
        <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance size='tiny' color='green' label='Income' value='1400' />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance size='tiny' color='red' label='Expenses' value='653' />
          </Grid.Column>
          
        </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default DisplayBalances
