import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  console.log(journey);
  const [id, setId] = useState('');

  const handleJourneyChange = (journeyData) => {
    // console.log(journeyData);
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
      {journey && <SelectedSeat number={journey.autoSeat} />}
    </main>
  );
};
