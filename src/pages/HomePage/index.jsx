import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const [id, setId] = useState('');

  const handleJourneyChange = (journeyData) => {
    // console.log(journeyData);
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <h2>Nalezeno spojeni s ID: {journey.journeyId}</h2>}
    </main>
  );
};
