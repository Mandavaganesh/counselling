import React, { useState } from 'react';
import './UserVoting.css';

function Polling() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [page, setPage] = useState('poll');

  const handleMemberSelect = (selectedMember) => {
    setSelectedMember(selectedMember);
  }

  const handleVote = () => {
    if (selectedMember) {
      setPage('success');
    }
  }

  const members = [
    {
      name: "AP ELECTIONS",
      image: "https://static.toiimg.com/thumb/msid-102121583,imgsize-15416,width-400,resizemode-4/102121583.jpg",
      options: "TDP",
      description: "Telugu Desam Party - A regional political party in Andhra Pradesh and Telangana, advocating for regional development and governance.",
    },
    {
      name: "AP ELECTIONS",
      image: "https://static.toiimg.com/thumb/msid-31942786,imgsize-24017,width-400,resizemode-4/31942786.jpg",
      options: "JSP",
      description: "Jana Sena Party - Founded by actor Pawan Kalyan, it focuses on social and political issues in Andhra Pradesh.",
    },
    {
      name: "AP ELECTIONS",
      image: "data:image/jpeg;base64,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",
      options: "YSRCP",
      description: "Yuvajana Sramika Rythu Congress Party - A regional party in Andhra Pradesh, led by Y. S. Jagan Mohan Reddy.",
    },
    {
      name: "AP ELECTIONS",
      image: "data:image/jpeg;base64,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",
      options: "CONGRESS PARTY",
      description: "Indian National Congress - One of India's oldest political parties, with a rich history and diverse representation.",
    },
    {
        name:"Telagana Elections",
        image:"https://assets.thehansindia.com/h-upload/2021/04/27/1072828-trs.webp",
        options:"BRS PARTY",
        description:"The Bharat Rashtra Samithi formerly known as Telangana Rashtra Samithi (abbr. TRS)"
    }
  ];

  return (
    <div className="voting-container">
      <h2 className='ct-headline'>Parties </h2>
      {page === 'poll' && (
        
        <div>
          <table className="voting-table">
            <thead>
              <tr>
                <th className="table-header">Title</th>
                <th className="table-header">Options</th>
                <th className="table-header">Images</th>
                <th className="table-header">Description</th>
                
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td className="table-data">{member.name}</td>
                  <td className="table-data">{member.options}</td>
                  <td className="table-data">
                    <img src={member.image} alt={member.name} className="member-image" />
                  </td>
                  <td className="table-data">{member.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
<footer className="footer">

<div >

<div className="col-lg-3 col-md-12 col-sm-12 col-12 section2">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 app-icons">
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 copy-info"> 
                
                </div>
              </div>
            </div>


 </div>

</footer>

    </div>
  );
}

export default Polling;