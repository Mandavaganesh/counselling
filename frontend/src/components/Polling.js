import React, { useState } from 'react';
import{useNavigate}from'react-router-dom'

const Polling = () => {
  const [selectedParty, setSelectedParty] = useState(null);
  const [party1, setParty1] = useState({ name: 'Party 1', image: 'https://3.bp.blogspot.com/-8UWg69dcd_c/UbcKwss69yI/AAAAAAAACLI/SDU6XrHorX4/s1600/tdp-logo.jpg', tickOption: false });
  const [party2, setParty2] = useState({ name: 'Party 2', image: 'https://3.bp.blogspot.com/-5NB84OZ7Mk4/UjKIsyC6a5I/AAAAAAAAAJM/_YNU3CLqEts/s1600/YSR+Congress+Flag+(1).jpg', tickOption: false });
  const [party3, setParty3] = useState({ name: 'Party 3', image: 'data:image/jpeg;base64,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', tickOption: false });
  const [party4, setParty4] = useState({ name: 'Party 4', image: 'https://m.media-amazon.com/images/I/71d+YNmI5CL.jpg', tickOption: false });
  const navigate=useNavigate()
  const handlePartySelect = (party) => {
    setSelectedParty(party);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedPartyData = selectedParty === 'party1' ? party1 : party2 ;
    
    const pollData = {
      selectedParty,
      party: selectedPartyData
    };
    // Here you would send the pollData to the backend using fetch or axios
    console.log('Submitted poll data:', pollData);
    navigate('/Submit')

  };

  return (
    <div style={{ 
      backgroundImage: "url(https://www.shutterstock.com/image-photo/image-girl-smartphone-hands-she-260nw-753157075.jpg)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '93vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1><center>Welcome to Online Voting System</center></h1>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'rgba(355, 355, 355, 0.6)',
        padding: '20px',
        borderRadius: '10px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="radio" id="party1" name="selectedParty" value="party1" checked={selectedParty === 'party1'} onChange={() => handlePartySelect('party1')} />
          <label htmlFor="party1" style={{ marginRight: '10px' }}>{party1.name}</label>
          {party1.image && <img src={party1.image} alt="Party 1" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="radio" id="party2" name="selectedParty" value="party2" checked={selectedParty === 'party2'} onChange={() => handlePartySelect('party2')} />
          <label htmlFor="party2" style={{ marginRight: '10px' }}>{party2.name}</label>
          {party2.image && <img src={party2.image} alt="Party 2" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="radio" id="party3" name="selectedParty" value="party3" checked={selectedParty === 'party3'} onChange={() => handlePartySelect('party3')} />
          <label htmlFor="party3" style={{ marginRight: '10px' }}>{party3.name}</label>
          {party3.image && <img src={party3.image} alt="Party 3" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="radio" id="party4" name="selectedParty" value="party4" checked={selectedParty === 'party4'} onChange={() => handlePartySelect('party4')} />
          <label htmlFor="party4" style={{ marginRight: '10px' }}>{party4.name}</label>
          {party4.image && <img src={party4.image} alt="Party 4" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

    
    

  );
};

export default Polling;