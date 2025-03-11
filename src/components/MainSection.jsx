import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '../vite.svg'
import MyNewButton from './MyNewButton'
// import UserProfile from './UserProfile'
// import Products from './Products'
// import '../App.css'

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}



function MainContent() {
  const [count, setCount] = useState(0)
  function handleButtonClick() {
    setCount(count + 1);
  }


  return (
    <>

      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>

      <div>
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
      </div>
      <div>
        <h1>Counters that update together</h1>
        <MyNewButton count={count} onClick={handleButtonClick}/>
        <MyNewButton count={count} onClick={handleButtonClick}/>
      </div>
    </>
  )
}

export default MainContent

// Two section layout commented from App.jsx
      
      {/* <TwoSectionLayout
        leftContent={
          <div>
            <h1>Navigation</h1>
            <p>This is the content for the Navigation Bar.</p>
          </div>
        }
        rightContent={
          <MainContent />    
        }
      /> */}