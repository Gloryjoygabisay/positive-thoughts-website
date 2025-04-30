import React from 'react';

interface ThoughtCardProps {
    thought: string;
}

const ThoughtCard: React.FC<ThoughtCardProps> = ({ thought }) => {
    return (
        <div className="thought-card">
            <p>{thought}</p>
        </div>
    );
};

export default ThoughtCard;