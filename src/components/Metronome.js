import React, { useState, useRef } from 'react';
import click from '../audio/sound.wav';
import RangLine from './RangLine';
import StartButton from './StartButton';
const Metronome = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [bpmValue, setBpmValue] = useState(100);
    const sound = new Audio(click);

    const playClick = () => {
        sound.play();
    }

    let timerId = useRef(null);

    const handleBpmChange = e => {
        const bpm = e.target.value;
        if (isPlaying) {
            clearInterval(timerId.current);
            timerId.current = setInterval(playClick, (60 / bpm) * 1000);
            setBpmValue(bpm);
        } else {
            setBpmValue(bpm);
        }
    }

    const startStop = () => {
        if (isPlaying) {
            clearInterval(timerId.current);
            setIsPlaying(false);
        } else {
            timerId.current = setInterval(playClick, (60 / bpmValue) * 1000);
            setIsPlaying(true);
        }
    }

    return (
        <div className="metronome">
            <RangLine
                bpm={bpmValue}
                handleBpmChange={handleBpmChange} />
            <StartButton
                startStop={startStop}
                playing={isPlaying} />
        </div>
    )
}

export default Metronome;