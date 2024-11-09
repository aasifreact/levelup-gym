import React from "react";
import TrainerCard from "../layouts/TrainerCard";

const Trainers = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center mt-10">Our Trainers</h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
                <TrainerCard img={"https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name="Majid" />
                <TrainerCard img={"https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMHRyYWluZXJzfGVufDB8fDB8fHww"} name="sara deshmukh" />
                <TrainerCard img={"https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwdHJhaW5lcnN8ZW58MHx8MHx8fDA%3D"} name="julia shinde" />
            </div>
        </div>
    );
};

export default Trainers;