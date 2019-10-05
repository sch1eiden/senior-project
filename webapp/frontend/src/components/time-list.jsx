import React, {useState, useEffect} from 'react';
import firebase from '../firebase';

function useTimes() {
    const [times, setTimes] = useState([])
    useEffect(() => {
        firebase.firestore().collection('Bin').onSnapshot((snapshot) => {
            const newTimes = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setTimes(newTimes);
        })
    }, [])
    return times;
}
const TimeList = () => {
    const times = useTimes();
    return (
        <div>
            <h1>Time List</h1>
            <div>
                <label>Sort By:</label>{' '}
                <select>
                    <option>Time (fastest first)</option>
                    <option>Time (slowest first)</option>
                    <option disabled>---</option>
                    <option>Title (a-z)</option>
                    <option>Time (z-a)</option>
                </select>
            </div>
            <ol>
                <li>
                    <div className="time-entry">
                        My amazing entry title
                        <code className="time"> 18 seconds</code>
                    </div>
                </li>
                <li>
                    <div className="time-entry">
                        My amazing entry title
                        <code className="time"> 18 seconds</code>
                    </div>
                </li>
            </ol>
        </div>
    )
}
export default TimeList