import React, { useState } from 'react';

import Title from '../components/title';
// import logo from './logo.svg';
 import '../App.css';

// function Title({ appName, ver, fullName,className})
// {
// return(
//     <div className={className}>

//       <h2>{appName} version.{ver}</h2>
//      <p>created by {fullName()}</p>   

//     </div>
// );
// }

function ResponsiveComponent({ index }) {
  return (
    <div class="responsive">

      I'm {index + 1}th child.

    </div>

  );
}




function App({ ver }) {
  const appName = "MY first react app";

  const [name, setName] = useState('');

  const [students, setStudents] = useState([]);

  const author = {
    first_name: "Jhon",
    last_name: "Doe",
  };
  const fullName = () => {
    return author.first_name + ' ' + author.last_name;
  }

  const handleOnClick = () => {
    console.log('clicked');
    const student = {
      id: Math.floor(Math.random() * 1000),
      name: name,
    };

    //const newStudents = students.push(student);

    //console.log('[students]', students);

    setStudents(students.concat([student]));
    setName('');


  }

  const handleInputChange = (e) => {

    setName(e.target.value);

  }


  return (
    <div className="App">

      <Title className="bg-blue" ver={ver} appName={appName} fullName={fullName}>

        <h3> Iam a child component</h3>


      </Title>



      <div style={{ backgroundColor: '#0f0' }}>
        <input name="username" value={name} onChange={handleInputChange} />
        <button onClick={handleOnClick}>ADD</button>
      </div>




      {
        students.map((student, i) => (
          <div key={i}>
            <p>{student.id}.{student.name}</p>
          </div>)
        )

      }

  <div>
      {
        [1, 2, 3].map((it, i) => (<ResponsiveComponent key={i} index={i} />))
      }
     </div> 



      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

      </header> */}
    </div>
  );
}

export default App;
