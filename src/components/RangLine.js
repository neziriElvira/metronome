
const RangLine = ({ bpm, handleBpmChange }) => {
    return (
        <div className="RangLine">
            <h1>METRONOME</h1>
            <div>{bpm} BPM </div>
            <input
                type="range"
                min="40"
                max="200"
                value={bpm}
                onChange={handleBpmChange}
            />
        </div>
    )
}

export default RangLine;