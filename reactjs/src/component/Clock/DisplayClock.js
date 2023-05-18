import React, { useEffect, useMemo, useState } from 'react'
export default function DisplayClock(props) {
    const [countdown, setCountdown] = useState();
    useMemo(() => {
        setCountdown(props.time)
    }, [])
    useEffect(() => {
        const timer = countdown > 0 &&
            setInterval(() => setCountdown(countdown - 1), 1000);
        return () => clearInterval(timer);
    }, [countdown]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <React.Fragment>
            {countdown === 0 ? (
                props.handleOverTimeExam()
            ) : (
                <h2 style={{ textAlign: "start" }}>Thời gian còn lại của bài thi : {formatTime(countdown)}</h2>
            )}
        </React.Fragment>
    );
};

