const StartButton = ({ startStop, playing }) => {
    return (
        <div className="startButton">
            <button onClick={startStop}>
                {playing ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}

export default StartButton;