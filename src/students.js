import React from 'react';

function Student(props) {
    return (
        <div>
            <h1>Ahmed's Student ID is: {props.studentID}</h1>
            <h1>Ali's Class is: {props.studentClass}</h1>
        </div>
    );
}

export default Student