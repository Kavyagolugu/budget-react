import logo from './logo.svg';
import './App.css';
import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance size='small' label='Your Balance' value='2,550'/>
      <DisplayBalances/>
      <MainHeader type='h3' title='History'/>
     <EntryLine description='Income' value='20.00' isExpense={false}/>
     <EntryLine description='Expense' value='10.00' isExpense={true}/>
      <MainHeader type='h3' title='Add new Transaction'/>
      <NewEntryForm/>
      

    </Container>
  );
}

export default App;
