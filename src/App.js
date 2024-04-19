import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import GetEmployees from './component/GetEmployees';
import AddEmployee from './component/AddEmployee';
import UpdateEmployee from './component/UpdateEmployee';
import DeleteEmployee from './component/DeleteEmployee';


const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <GetEmployees />
        {/* <AddEmployee /> */}
        {/* <UpdateEmployee /> */}
        {/* <DeleteEmployee /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
