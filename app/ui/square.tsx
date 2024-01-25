'use client'
import { useState } from 'react';

interface SquareProps {
    title: string;
    content: React.ReactNode;
}
  
const Square: React.FC<SquareProps> = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);
    const [infoVisible, setInfoVisible] = useState(true);


    const toggleExpansion = () => {
        setExpanded(!expanded);
        setInfoVisible(!infoVisible);
    };

    return (
        <div
        className={`my-8 min-w-[200px] min-h-[100px] sm:w-1/4 sm:h-1/4 md:w-1/5 md:h-1/5 lg:w-1/6 lg:h-1/6 bg-white rounded-md shadow-xl flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out ${expanded ? 'expanded ' : ''}`}
        onClick={toggleExpansion}
        style={{ width: expanded ? 'calc(100%)' : '' }}
        >
            <h2 className="text-2xl">{title}</h2>
            
            {infoVisible && (
                <div className="text-center">
                    <p>Plus d&apos;info</p>
                    <p>+</p>
                </div>
            )}
                
            
            <div className={`text-justify ${expanded ? 'expanded-content' : 'hidden'}`}>
                {content}
            </div>
        </div>
    );
};

export default Square