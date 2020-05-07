import React, { useContext } from 'react';
import { PersonContext } from '../../contexts/PersonContext';
import PersonCard from './person-card/PersonCard';

export default function PersonList() {
    const { persons } = useContext(PersonContext);

    return (
        <div id="person-list">
            {persons.map(person => (
                <PersonCard key={person.id} person={person} />
            ))}
        </div>
    )
}
