import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { useState } from "react";

export default function Form(props) {
    // const { interviewers, onSave, onCancel } = props;

    const [student, setStudent] = useState(props.student || "");
    const [interviewer, setInterviewer] = useState(props.interviewer || null);

    const [error, setError] = useState("");


    const reset = () => {
        setStudent("");
        setInterviewer(null);
    };

    const cancel = () => {
        reset();
        props.onCancel();
    };

    function validate () {
        if (student === "") {
            setError("Student name cannot be blank");
            return;
        }
        if (interviewer === null) {
            setError("Please select an interviewer");
            return;
          }
          setError("");
        props.onSave(student, interviewer);
    }

    return (
        <main className="appointment__card appointment__card--create">
            <section className="appointment__card-left" onSubmit={event => event.preventDefault()}>
                <form autoComplete="off">
                    <input
                        className="appointment__create-input text--semi-bold"
                        name="name"
                        type="text"
                        placeholder="Enter Student Name"
                        value={student}
                        onChange={(event) => {setStudent(event.target.value)}}
                        data-testid="student-name-input"
                    />
                </form>
                <InterviewerList
                    interviewers={props.interviewers}
                    value={interviewer}
                    onChange={setInterviewer}
                />
                <section className="appointment__validation">{error}</section>
            </section>
            <section className="appointment__card-right">
                <section className="appointment__actions">
                    <Button danger onClick={cancel}>Cancel</Button>
                    <Button confirm onClick={validate}>Save</Button>
                </section>
            </section>
        </main>
    );
    }
