import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  // console.log(journey);
  const [id, setId] = useState('');

  const navigate = useNavigate();

  const handleBuy = async () => {
    const response = await fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/reservation`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),
      },
    );

    const json = await response.json();
    const reservationId = json.results.reservationId;
    console.log('reservationId', reservationId);
    navigate(`/reservation/${reservationId}`);
  };

  const handleJourneyChange = (journeyData) => {
    // console.log(journeyData);
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />
          <div className="controls container">
            <button onClick={handleBuy} className="btn btn--big" type="button">
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );
};
