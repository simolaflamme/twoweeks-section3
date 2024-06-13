
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx'
import CoreConept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data';

// THE CODE DOWN IS JUST A SHORTEN FORM TO COLLECT PROPS FROM DATA.JS TO HERE USING THE INDEX
function App() {
   const [selectedTopic,setSelectedTOpic]=useState();
  function handleSelect(selectedButton){
setSelectedTOpic(selectedButton)
    console.log(selectedButton);
}
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=>(<CoreConept key={conceptItem.title} {...conceptItem}/>))}


          <CoreConept
         title = {CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          
          />
       
            <CoreConept {...CORE_CONCEPTS[1]}/>
            <CoreConept {...CORE_CONCEPTS[2]}/>
            <CoreConept {...CORE_CONCEPTS[3]}/>
            
          
          
          </ul>
        </section>
        <section id ='examples'>
          <h2>Example</h2>
          <menu>
           <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
           <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>Jsx</TabButton>
           <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
           <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic? <p>please select a Topic</p> : <div id ="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
         
        </section>
      </main>
    </div>
  );
}

export default App;
