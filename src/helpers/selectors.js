export function getAppointmentsForDay(state, day) {
    //... returns an array of appointments for that day
    const result = [];
    const dayObj = state.days.find((dayObj) => dayObj.name === day);
    if (dayObj) {
        for (const id of dayObj.appointments) {
            result.push(state.appointments[id]);    
        }
    }
    return result;
}
  
export function getInterview(state, interview) {
    //... returns an object that contains the interview data when we pass it an object that contains the interviewer
    if (!interview) {
        return null;
    }
    const interviewer = state.interviewers[interview.interviewer];
    return {...interview, interviewer};
}

export function getInterviewersForDay(state, day) {
    //... returns an array of interviewers for that day
    const result = [];
    const dayObj = state.days.find((dayObj) => dayObj.name === day);
    if (dayObj) {
        for (const id of dayObj.interviewers) {
            result.push(state.interviewers[id]);    
        }
    }
    return result;
}