import './style.css'

export function CountdownItem(props) {
    return (
        <div className='countdown-item'>
                <p>{props.type}</p>
                <span id="days">{props.time}</span>
        </div>
    )
}