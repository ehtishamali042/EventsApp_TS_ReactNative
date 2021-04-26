import React, {useState, useEffect, useCallback} from 'react';
import {AsyncStorageAPI} from 'utilities';

const {getFromAsyncStore} = AsyncStorageAPI;

export type EventType = {
  id: string;
  name: string;
  description: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  eventType: 'event' | 'out_of_office' | 'task';
};

type UserEventsContextProps = {
  events: EventType[];
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
  refetchEvents: () => void;
};

export const UserEventsContext = React.createContext<UserEventsContextProps>({
  events: [],
  setEvents: () => {},
  refetchEvents: () => {},
});

export const UserEventsProvider: React.FC = ({children}) => {
  const [events, setEvents] = useState<EventType[]>([]);

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
