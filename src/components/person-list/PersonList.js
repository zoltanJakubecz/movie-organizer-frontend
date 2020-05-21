import React, { useContext } from 'react';
import { PersonContext } from '../../contexts/PersonContext';
import PersonCard from './person-card/PersonCard';
import { UserContext } from '../../contexts/UserContext';
import LoginPromptPanel from '../LoginPromptPanel';

export default function PersonList() {
    const { persons } = useContext(PersonContext);
    const { username } = useContext(UserContext);

    return !!username ? (
        <div id="person-list">
            {persons.map(person => (
                <PersonCard key={person.id} person={person} />
            ))}
        </div>
    ) : (
            <LoginPromptPanel
                title="Please log in to see all the artists!"
                subtitle="Don't have an account? Click Register!"
            />
        )
}
