import React from 'react';

const Job = ({data}) => (
    <div>
        <MKTypography variant="h6" fontWeight="bold">
        {data.Company + " - " + data.Title}
        </MKTypography>
        <MKTypography variant="body2" color="text">
        {data.StartDate + " - " + data.EndDate}
        </MKTypography>
        <ul>
        {data.Bullets.map((point) => (
        <MKTypography variant="body2" color="black" fontWeight="light">
            <li>{point}</li>
        </MKTypography>
        ))}
        </ul>
    </div>
)

export default Job;