import React from "react";
import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";
import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props) {
    const EMPTY = "EMPTY";
    const SHOW = "SHOW";
    const CREATE = "CREATE";
    const SAVING = "SAVING";
    const DELETING = "DELETING";
    const CONFIRM = "CONFIRM";
    const EDIT = "EDIT";
    const ERROR_SAVE = "ERROR_SAVE";
    const ERROR_DELETE = "ERROR_DELETE";


    const { mode, transition, back } = useVisualMode(
        props.interview ? SHOW : EMPTY
    );

    function save(name, interviewer) {
        const interview = {
            student: name,
            interviewer
        };
        transition(SAVING);
        props.bookInterview(props.id, interview)
        .then (() => transition(SHOW));
        // .catch(error => transition(ERROR_SAVE, true));
  

//   // Verify that the id and interview values are correct in the console output
//   console.log("Appointment id:", props.id);
//   console.log("Interview:", interview);
    
    };

    function destroy() {
        transition(CONFIRM);
    }
    function destroyConfirm() {
        transition(DELETING, true);
        props.cancelInterview(props.id)
        .then (() => transition(EMPTY));
    }
    function edit() {
        transition(EDIT);
    }

    return (
        <article className="appointment">
            {console.log("props", props)}
            <Header time={props.time} />
            {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
            {mode === SHOW && (
                <Show
                    student={props.interview.student}
                    interviewer={props.interview.interviewer}
                    onDelete={() => destroy()}
                    onEdit={() => edit()}
                />
            )}
            {mode === CREATE && (
                <Form
                    interviewers={props.interviewers}
                    onCancel={() => back()}
                    onSave={save}
                    bookInterview={props.bookInterview}
                    id={props.id}
                />  
            )}
            {mode === SAVING && 
            <Status message="Saving" />
            }
            {mode === DELETING && <Status message="Deleting" />}
            {mode === CONFIRM && (
                <Confirm
                    message="Are you sure you would like to delete?"
                    onCancel={() => back()}
                    onConfirm={destroyConfirm}
                />
            )}
            {mode === EDIT && (
                <Form
                    student={props.interview.student}
                    interviewer={props.interview.interviewer.id}
                    interviewers={props.interviewers}
                    onCancel={() => back()}
                    onSave={save}
                />
            )}

        </article>
    );
};



{/* {mode === ERROR_SAVE && (
                <Error
                    message="Could not save appointment."
                    onClose={() => back()}
                />
            )}
            {mode === ERROR_DELETE && (
                <Error
                    message="Could not delete appointment." 
                    onClose={() => back()}  
                />
            )}
        </article>
    );  
} */}