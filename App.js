import { useState } from "react";
import Button from '@mui/material/Button';

function MyForm() {
  const [name, setName] = useState("");
  const [NIN, setNin] = useState("");
  const [number, setNumber] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [date, setDate] = useState("");
  const [birth, setBirth] = useState("");
  const [Female, setFemale] = useState("");
  const [district, setDistrict] = useState("");
  const handle = () => {
    localStorage.setItem('Name', name);
    localStorage.setItem('NIN', NIN);
    localStorage.setItem('Number', number);
    localStorage.setItem('Vaccine', vaccine);
    localStorage.setItem('date', date);
    localStorage.setItem('birth', birth);
    localStorage.setItem('female', Female);
    localStorage.setItem('district', district);
  };

  return (
    <div className="deo">
    <form>
      <div className="cont">
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
      />
      </label>
      <br/>
      <label>Enter your NIN:
        <input
          type="text" 
          value={NIN}
          onChange={(e) => setNin(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter your phone number:
        <input
          type="number" 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <br/>
      <label>Type of Vaccine:
        <input
          type="text" 
          value={vaccine}
          onChange={(e) => setVaccine(e.target.value)}
        />
      </label>
      <br/>
      <label>Date of Vaccine:
        <input
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br/>
      <label>Date of Birth:
        <input
          type="date" 
          value={birth}
          
          onChange={(e) => setBirth(e.target.value)}
        />
      </label>
      <br/>
     <div>
        <input
          type="radio" 
          value="Female"
          checked={Female === 'Female'}
          onChange={(e) => setFemale(e.target.value)}
        /> Female
    </div>
    <div>
    <input
          type="radio" 
          value="Male"
          checked={Female === 'Male'}
          onChange={(e) => setFemale(e.target.value)}
        /> Male
    </div>
      
      <label>Enter your District:
        <input
          type="text" 
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </label>
      <br/>
      <Button onClick={handle}variant="contained">Register</Button>
      {localStorage.getItem('Name') && (
        <div>
          Name: <p>{localStorage.getItem('Name')}</p>
        </div>
      )}
      </div>
    </form>
    </div>
  )
}

export default MyForm
