import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { useState } from "react";
import InterviewerListItem from "./InterviewerListItem";

export default function Form(props) {
    // const { name, interviewers, interviewer, onSave, onCancel } = props;

    const [student, setStudent] = useState(props.student || "");
    const [interviewer, setInterviewer] = useState(props.interviewer || null);


    const reset = () => {
        setStudent("");
        setInterviewer(null);
    };

    const cancel = () => {
        reset();
        props.onCancel();
    };

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
                        onChange={(event) => setStudent(event.target.value)}
                    />
                </form>
                <InterviewerList
                    interviewers={props.interviewers}
                    value={interviewer}
                    onChange={setInterviewer}
                />
            </section>
            <section className="appointment__card-right">
                <section className="appointment__actions">
                    <Button danger onClick={cancel}>Cancel</Button>
                    <Button confirm >Save</Button>
                </section>
            </section>
        </main>
    );
    }
