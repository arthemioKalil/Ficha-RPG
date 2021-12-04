
import './App.scss';
import React, {
  useState, useEffect
} from 'react';


function App() {
  

    const [description, setDescription] = useState('');


    useEffect(() => {

       var descText = document.getElementById('description');
       setDescription(''+descText!.textContent);
       descText!.textContent = localStorage.getItem("description3");

    
    }, [description]);

  return (
    
      <div className="App">
        
        <header className="App-header">
          
        <div className="ContainerTop">

        <h3 id="TitleTop"> Ficha RPG </h3>

        </div>

        <div className="ContainerInfo">

          <textarea 
          id="description" 
          name="description1"
          onChange={e => localStorage.setItem("description3", e.target.value)}
          autoComplete="off"
          />
          <label className="descriptionLabel">Descrição</label>

          <p id="list">{description}</p>

        </div>

        </header>
          
        </div>


  );
  
}


export default App;
