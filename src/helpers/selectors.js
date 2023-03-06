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
  