import React from "react";

const UserInput = ({changeName}) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title mb-3">
                        User Input
                    </h5>
                    <div className="mb-3">
                        <input onChange={(e) => changeName(e.target.value)}
                               type="text" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInput;