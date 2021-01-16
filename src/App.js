import { useState } from 'react';
import { Calendar } from './Calendar';

const fakeEvents = [{
    date: new Date(),
    title: 'Trash day!',
}, {
    date: new Date(),
    title: 'Other stuff',
}];

export const App = () => {
    const today = new Date();
    const events = useState(fakeEvents);
    
    const onClickDate = selectedDate => {
        alert(`User clicked: ${selectedDate.toLocalDateString()}`);
    }

    return (
        <div style={{ width: '700px', height: '400px' }}>
            <Calendar
                events={events}
                onClickDate={onClickDate}
                startingDate={today} />
        </div>
    );
}