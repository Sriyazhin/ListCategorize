import { useState } from 'react';
import './App.css';
import listbox from './listbox';
import data from './data';
import { useEffect } from 'react';

function App() {
  // const [details,setDetails] = useState();
  
  
    const categorizedData = {};
  const details= data;
  var categoreies; 
  categoreies=details.map(x=>x.category).filter((a,b,c)=>{
    return c.indexOf(a)===b;
  })

  categoreies.forEach(x=> details.forEach(y=>{
    
      if(categorizedData[x]){
        
        if(x===y.category){
          categorizedData[x].push(y.name)
      }
    }
    else{
      categorizedData[x]=[];
      // categorizedData[x].shift();
    }
  }))
console.log(categorizedData,'categorizedData')
const datas = JSON.stringify(categorizedData);
console.log(datas,'datas')
  return (
    <div className="App">
      <div className='boxlist'>
      {Object.keys(categorizedData).map(category => (
        <div key={category} className='listbox'>
          <div className='title'>{category}</div>
           
          <div className='unorderlist'>
            {categorizedData[category].map(name => (
              <li className='lists' key={name}>{name}</li>
            ))}
          </div>
        </div>
      ))}  
      </div>
    </div>
  );
}

export default App;
