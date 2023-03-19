import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { calculateSpotsForDay } from "helpers/selectors";

const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";

function reducer(state, action) {
  switch (action.type) {
    case SET_DAY:
      return { ...state, day: action.day };
    case SET_APPLICATION_DATA:
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      };
    case SET_INTERVIEW: {
      const appointment = {
        ...state.appointments[action.id],
        interview: action.interview && { ...action.interview }
      };
      const appointments = {
        ...state.appointments,
        [action.id]: appointment
      };
      const days = state.days.map((day) => ({
        ...day,
        spots: calculateSpotsForDay(state, day.name, appointments)
      }));
      return {
        ...state,
        appointments,
        days
      };
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default function useApplicationData() {
    const [state, dispatch] = useReducer(reducer, {
      day: "Monday",
      days: [],
      appointments: {},
      interviewers: {}
    });
  
    const setDay = (day) => dispatch({ type: SET_DAY, day });
  
    useEffect(() => {
      Promise.all([
        axios.get("http://localhost:8001/api/days"),
        axios.get("http://localhost:8001/api/appointments"),
        axios.get("http://localhost:8001/api/interviewers")
      ]).then((all) => {
        dispatch({
          type: SET_APPLICATION_DATA,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        });
      });
    }, []);
  
    function bookInterview(id, interview) {
      return axios
        .put(`/api/appointments/${id}`, { interview })
        .then(() => {
            dispatch({ type: SET_INTERVIEW, id, interview });
        });
    }
  
    function cancelInterview(id) {
      return axios
        .delete(`/api/appointments/${id}`)
        .then(() => {
            dispatch({ type: SET_INTERVIEW, id, interview: null });
      });
    }
  
    return { state, setDay, bookInterview, cancelInterview };
  }
  

// export default function useApplicationData() {
//     const [state, setState] = useState({
//         day: "Monday",
//         days: [],
//         appointments: {},
//         interviewers: {}
//     });
    
//     const setDay = day => setState({ ...state, day });
    
//     useEffect(() => {
//         Promise.all([
//         axios.get("http://localhost:8001/api/days"),
//         axios.get("http://localhost:8001/api/appointments"),
//         axios.get("http://localhost:8001/api/interviewers")
//         ]).then((all) => {
//         setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
//         });
//     }, []);
    

//     function bookInterview(id, interview) {
//         console.log("appointments before constants", state.appointments);

//         const appointment = {
//         ...state.appointments[id],
//         interview: { ...interview }
//         };
//         const appointments = {
//         ...state.appointments,
//         [id]: appointment
//         };

//         console.log("Statement:", calculateSpotsForDay(state, state.day, appointments));
        
//         return axios.put(`/api/appointments/${id}`, { interview })
//         .then(() => {
//             setState({
//             ...state,
//             appointments,
//             days: state.days.map(day=>{
//                 if (day.name===state.day){
//                     return {...day, spots: calculateSpotsForDay(state, state.day, appointments)}
//                 }
//                 return day;
//             })
//             })
//             console.log("appointments after update", appointments);
//             return;
//         })
//     };
    
//     function cancelInterview(id) {
//         const appointment = { ...state.appointments[id], interview: null };
//         const appointments = { ...state.appointments, [id]: appointment };
//         return axios.delete(`/api/appointments/${id}`)
//         .then(() => {
//             setState({
//             ...state,
//             appointments,
//             days: state.days.map(day=>{
//                 if (day.name===state.day){
//                     return {...day, spots: day.spots +1}
//                 }
//                 return day;
//             })
//             });
            

//         })
//     };
    
//     return { state, setDay, bookInterview, cancelInterview };
//     }