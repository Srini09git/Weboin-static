"use client";
import React from 'react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Examplecompo = ({ children, ...inputs }) => {
    return (
        <div className={twMerge(clsx(inputs))}>
            {children}
        </div>
    );
};

export default Examplecompo;
