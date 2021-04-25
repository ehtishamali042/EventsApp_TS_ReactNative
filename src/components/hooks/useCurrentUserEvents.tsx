import {useContext} from 'react';

import {UserEventsContext} from 'components';

export const useCurrentUserEvents = () => {
  const {events, refetchEvents, setEvents} = useContext(UserEventsContext);
  return {events, refetchEvents, setEvents};
};
