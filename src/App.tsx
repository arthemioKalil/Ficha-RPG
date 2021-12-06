
import './App.scss';
import React, {
  useState, useEffect
} from 'react';


function App() {


    const [description, setDescription] = useState('');

    useEffect(() => {


      // POST request using fetch inside useEffect React hook
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ description: localStorage.getItem('descriptionValue') })
      };
      fetch('https://forrpgdados.herokuapp.com/description', requestOptions)
          .then(response => response.json())
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)

  async function DescriptionBackend()
  {
    const response = await fetch('https://forrpgdados.herokuapp.com/desc');
    const data = await response.json();

    var descText = document.getElementById('description');
    setDescription(''+descText!.textContent);

    descText!.textContent = data.description;

  }

  DescriptionBackend();

  }, [localStorage.getItem('descriptionValue')]);

  useEffect(() =>{

  })

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
          onChange={e => localStorage.setItem("descriptionValue", e.target.value)}
          autoComplete="off"
          />
          <label className="descriptionLabel">Descrição</label>

        </div>

        </header>
          
        </div>


  );
  
}


export default App;
