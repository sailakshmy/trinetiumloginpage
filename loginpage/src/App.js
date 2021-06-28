import {useState} from 'react';
import './App.css';

function App() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      setCredentials(true);
      setCredentialsObject([{email:email, password:password}]);
      setEmail('');
      setPassword('');
    }
  }
  const handleDeleteItem=(removeIndex)=>{
    const newCredentialsObjectList = credentialsObject.filter((obj, index)=>index!== removeIndex);
    setCredentialsObject(newCredentialsObjectList);
    setCredentials(false);
  }
  const [email, setEmail]=useState('');
  const [password, setPassword]= useState('');
  const [credentials, setCredentials]=useState(false);
  const [credentialsObject, setCredentialsObject] = useState([]);
  return (
    <div className="App">
      <h1>Login Page</h1>
      <header className="App-header">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label for="email">Email: </label>
            <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>
            <br/>
            <label for="password">Password: </label>
            <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required/>
            <br/>
            <button type="submit">Login</button>
          </form>
          <br/>
        </div>
        <br/>
      </header>
      {credentials && 
               <footer className="credentiallist">
               <h2>The Credential details are as follows:</h2>
                <ul>
                  {credentialsObject?.length>0 && credentialsObject.map((credentials,index)=>(
                    <li key={index}>{`Email: ${credentials.email}`}| {`Password: ${credentials.password}`} <button onClick={()=>handleDeleteItem(index)}>Delete</button></li>
                  ))}
                </ul>
             </footer>
          }
    </div>
  );
}

export default App;
