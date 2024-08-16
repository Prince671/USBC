
import React, { useEffect, useState } from 'react';
import ReceivedInterestService from '../services/receivedInterestService';

const ReceivedInterests = () => {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    ReceivedInterestService.getReceivedInterests().then(response => {
      setInterests(response.data);
    });
  }, []);

  const handleAccept = (interestId) => {
    ReceivedInterestService.acceptInterest(interestId).then(() => {
      setInterests(interests.filter(interest => interest.id !== interestId));
    });
  };

  const handleReject = (interestId) => {
    ReceivedInterestService.rejectInterest(interestId).then(() => {
      setInterests(interests.filter(interest => interest.id !== interestId));
    });
  };

  return (
    <div>
      <h2>Received Interests</h2>
      <ul>
        {interests.map(interest => (
          <li key={interest.id}>
            Interest from {interest.sender.username}
            <button onClick={() => handleAccept(interest.id)}>Accept</button>
            <button onClick={() => handleReject(interest.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceivedInterests;
