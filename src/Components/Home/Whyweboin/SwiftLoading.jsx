'use client';
import React from 'react';
import clsx from 'clsx';

const getColorClass = (score) => {
    if (score <= 20) return 'red';
    if (score <= 40) return 'pink';
    if (score <= 60) return 'orange';
    if (score <= 80) return 'lime';
    return 'green';
};

const getGrade = (score) => {
    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B+';
    if (score >= 60) return 'B';
    if (score >= 50) return 'C+';
    if (score >= 40) return 'C';
    if (score >= 30) return 'D+';
    if (score >= 20) return 'D';
    return 'F';
};

const ScoreCard = ({ title, score }) => {
    const color = getColorClass(score);
    const grade = getGrade(score);

    const bgClasses = {
        red: "bg-red-600",
        pink: "bg-pink-600",
        orange: "bg-orange-600",
        lime: "bg-lime-400",
        green: "bg-green-600",
    };

    const barClasses = {
        red: "bg-red-600",
        pink: "bg-pink-600",
        orange: "bg-orange-600",
        lime: "bg-lime-400",
        green: "bg-green-600",
    };

    const bgColour = bgClasses[color];
    const barColour = barClasses[color];

    return (
        <div className="flex flex-col items-center md:items-start w-full mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
                <div className={clsx("text-black font-bold rounded px-2", bgColour)}>{grade}</div>
                <span className="text-3xl font-bold text-black">{score}%</span>
            </div>
            <p className="text-black mt-2">{title}</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                <div className={clsx("h-2.5 rounded-full", barColour)} style={{ width: `${score}%` }}></div>
            </div>
        </div>
    );
};

const SwiftLoading = () => {

    const data = {
        pageSpeedScore: 70,
        gtMetrixScore: 40
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 space-y-8 md:space-y-0 md:space-x-8 bg-white">
            <div className="text-center md:text-left md:w-1/2">
                <h2 className="text-4xl font-bold text-black">Digital Marketing Swift</h2>
            </div>
            
            <div className="flex text-black flex-col md:flex-row md:space-x-8 w-full md:w-1/2">
                <ScoreCard
                    title="Google Page Speed Score"
                    score={data.pageSpeedScore}
                    
                />
                <ScoreCard
                    title="GT Metrix Score"
                    score={data.gtMetrixScore}
                />
            </div>
        </div>
    );
};

export default SwiftLoading;
