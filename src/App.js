import React,{useState} from 'react';
import './App.css';
import Button from './components/Button';
import Popup from './components/Popup';
import MyTable from './components/MyTable';

function App() {
  const [openPopup,setOpenPopup]=useState(false);
  return (
    <div className="App">
      {/* <button onClick={}>show Pop-up</button> */}
      <Button onClick={()=>setOpenPopup(true)}/>
      <Popup title='Users-Data' openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <p><MyTable/> </p>
      </Popup>
    </div>
  );
}

export default App;
