import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import FlightDetail from '../src/components/flight/FlightDetail';

storiesOf('Flight', module)
    .add('FlightDetail', () => (
        <FlightDetail />
    ));