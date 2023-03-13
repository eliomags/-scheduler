import { useState, useEffect } from "react";
import axios from "axios";
import { calculateSpotsForDay } from "helpers/selectors";

export default function useApplicationData() {
    const [state, setState] = useState({
        day: "Monday",
        days: [],
        appointments: {},
        interviewers: {}
    });
    
    const setDay = day => setState({ ...state, day });
    
    useEffect(() => {
        Promise.all([
        axios.get("http://localhost:8001/api/days"),
        axios.get("http://localhost:8001/api/appointments"),
        axios.get("http://localhost:8001/api/interviewers")
        ]).then((all) => {
        setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
        });
    }, []);
    

    function bookInterview(id, interview) {
        console.log("appointments before constants", state.appointments);

        const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
        };
        const appointments = {
        ...state.appointments,
        [id]: appointment
        };

        console.log("Statement:", calculateSpotsForDay(state, state.day, appointments));
        
        return axios.put(`/api/appointments/${id}`, { interview })
        .then(() => {
            setState({
            ...state,
            appointments,
            days: state.days.map(day=>{
                if (day.name===state.day){
                    return {...day, spots: calculateSpotsForDay(state, state.day, appointments)}
                }
                return day;
            })
            })
            console.log("appointments after update", appointments);
            return;
        })
    };
    
    function cancelInterview(id) {
        const appointment = { ...state.appointments[id], interview: null };
        const appointments = { ...state.appointments, [id]: appointment };
        return axios.delete(`/api/appointments/${id}`)
        .then(() => {
            setState({
            ...state,
            appointments,
            days: state.days.map(day=>{
                if (day.name===state.day){
                    return {...day, spots: day.spots +1}
                }
                return day;
            })
            });
            

        })
    };
    
    return { state, setDay, bookInterview, cancelInterview };
    }