
import './App.css';
// import { Button } from "@chakra-ui/react"
import { Route } from 'react-router-dom';
import  Homepage  from './pages/Homepage';
import  Chatpage from './pages/Chatpage';
function App() {
  return (
   <>
   <div>

    <Route path="/" component={Homepage} exact/>
<Route path="/chats" component={Chatpage} />


</div>
   </>
  );
}

export default App;
