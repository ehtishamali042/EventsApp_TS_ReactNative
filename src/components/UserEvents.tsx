import React, {useState, useEffect, useCallback} from 'react';
import {AsyncStorageAPI} from 'utilities';

const {getFromAsyncStore} = AsyncStorageAPI;

export const UserEventsContext = React.createContext({
  events: [],
  setEvents: () => {},
  refetchEvents: () => {},
});

export const UserEventsProvider: React.FC = ({children}) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = useCallback(() => {
    getFromAsyncStore('@events')
      .then(res => {
        const allEvents = res === null ? [] : res;
        setEvents(allEvents);
      })
      .catch(err => setEvents([]));
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <UserEventsContext.Provider
      value={{events, setEvents, refetchEvents: fetchEvents}}>
      {children}
    </UserEventsContext.Provider>
  );
};
