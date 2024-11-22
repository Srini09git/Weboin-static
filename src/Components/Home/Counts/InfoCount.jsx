"use client"
import React from "react";


import { Typography, Card, CardBody } from "@mui/material";

function InfoCard({ title, children }) {
    return (
        <div color="transparent" shadow={false}>
            <div className="grid px-0">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography className="font-normal">{children}</Typography>
            </div>
        </div>
    );
}

export default InfoCard;
