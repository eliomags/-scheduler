import React from "react";
import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
// import Form from "components/Appointment/Form";
// import Status from "components/Appointment/Status";
// import Confirm from "components/Appointment/Confirm";
// import Error from "components/Appointment/Error";
// import useVisualMode from "hooks/useVisualMode";

const appointments = {
    "1": {
      id: 1,
      time: "12pm",
    },
    "2": {
      id: 2,
      time: "1pm",
      interview: {
        student: "Lydia Miller-Jones",
        interviewer:{
          id: 3,
          name: "Sylvia Palmer",
          avatar: "https://i.imgur.com/LpaY82x.png",
        }
      }
    },
    "3": {
      id: 3,
      time: "2pm",
    },
    "4": {
      id: 4,
      time: "3pm",
      interview: {
        student: "Archie Andrews",
        interviewer:{
          id: 4,
          name: "Cohana Roy",
          avatar: "https://i.imgur.com/FK8V841.jpg",
        }
      }
    },
    "5": {
      id: 5,
      time: "4pm",
    }
  };

// export default function Appointment(props) {
//     const EMPTY = "EMPTY";
//     const SHOW = "SHOW";
//     const CREATE = "CREATE";
//     const SAVING = "SAVING";
//     const DELETING = "DELETING";
//     const CONFIRM = "CONFIRM";
//     const EDIT = "EDIT";
//     const ERROR_SAVE = "ERROR_SAVE";
//     const ERROR_DELETE = "ERROR_DELETE";

//     const { mode, transition, back } = useVisualMode(
//         props.interview ? SHOW : EMPTY
//     );

//     function save(name, interviewer) {
//         const interview = {
//             student: name,
//             interviewer
//         };
//         transition(SAVING);
//         props
//             .bookInterview(props.id, interview)
//             .then(() => transition(SHOW))
//             .catch(error => transition(ERROR_SAVE, true));
//     }

//     function destroy() {
//         transition(DELETING, true);
//         props
//             .cancelInterview(props.id)
//             .then(() => transition(EMPTY))
//             .catch(error => transition(ERROR_DELETE, true));
//     }

//     return (
//         <article className="appointment">
//             <Header time={props.time} />
//             {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
//             {mode === SHOW && (
//                 <Show
//                     student={props.interview.student}
//                     interviewer={props.interview.interviewer}
//                     onDelete={() => transition(CONFIRM)}
//                     onEdit={() => transition(EDIT)}
//                 />
//             )}
//             {mode === CREATE && (
//                 <Form
//                     interviewers={props.interviewers}
//                     onCancel={() => back()}
//                     onSave={save}
//                 />
//             )}
//             {mode === SAVING && <Status message="Saving" />}
//             {mode === DELETING && <Status message="Deleting" />}
//             {mode === CONFIRM && (
//                 <Confirm
//                     message="Are you sure you would like to delete?"
//                     onCancel={() => back()}
//                     onConfirm={destroy}
//                 />
//             )}
//             {mode === EDIT && (
//                 <Form
//                     name={props.interview.student}
//                     interviewer={props.interview.interviewer.id}
//                     interviewers={props.interviewers}
//                     onCancel={() => back()}
//                     onSave={save}
//                 />
//             )}
//             {mode === ERROR_SAVE && (
//                 <Error
//                     message="Could not save appointment."
//                     onClose={() => back()}
//                 />
//             )}
//             {mode === ERROR_DELETE && (
//                 <Error
//                     message="Could not delete appointment." 
//                     onClose={() => back()}  
//                 />
//             )}
//         </article>
//     );  
// }
export default function Appointment(props) {
    return (
        <article className="appointment">
            <Header time={props.time} />
            {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />}

        </article>
    );
}