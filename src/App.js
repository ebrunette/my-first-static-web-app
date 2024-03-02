import React from 'react';

function MyButton() {
  function HandleClick() {
    alert("Doing something from clicking me.");
  }
  return (
    <button onClick={HandleClick} className='avatar'>
      Test button
    </button>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function App() {
  //const user = new newuser({username: "Hedy Lamarr", imageUrl:"https://i.imgur.com/yXOvdOSs.jpg"});
  return (
    <div>
      Hello {user.username}! Welcome to my App!
    <br />
    <img 
      className='avatar'
      src={user.imageUrl}
      alt={'Photo of ' + user.username}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
    <br />
  
    <MyButton />
    <p>
      Testing a paragraph in my web app.
    </p>
    </div>
  );

}

export default App;
