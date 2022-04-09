import React from "react";
import '../css/modal.css'

function bestFriendsList(props) {

    return (
        <React.Fragment>
            <button type="button" className="button-17" data-bs-toggle="modal" data-bs-target="#FriendModal">
                Друзья ()
            </button>
            <div className="modal fade" id="FriendModal" tabIndex="-1" aria-labelledby="FriendModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="FriendModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            {/*{props.friends ?}*/}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-success">Add friend+</button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}

export default bestFriendsList;