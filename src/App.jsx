
import './App.css'
import Counter from './counter';
import Friends from './friends';

import Users from './users';


function App() {

    function handleClick (){
        alert('Button One Clicked');
    }

    const handleClick2 = () =>{
        alert('Button Two Clicked');
    }

    const addToFive = (num) => {
        alert(num + 5);
    }

  return (
    <>
      <h3>React Core Concepts 2</h3>

        <Friends></Friends>

       <Users></Users>
       <Counter></Counter>

      <button onClick={handleClick}>Click Mec 1</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() =>{alert('Button Three Clicked')}}>Click Me 3</button>
      <button onClick={() => addToFive(5)}>Five</button>
    </>
  )
}

export default App
