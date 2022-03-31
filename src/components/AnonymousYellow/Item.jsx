// import axios from "axios";
import React from "react";
import Moment from "react-moment";

const AnonymousYellowItem = (props) => {
  const publishHandler = () => {
    props.onPublish(props.message);
  };

  const deleteHandler = () => {
    props.onDelete(props.message);
  };

  const showInModal = () => {
    props.showInModal(props.message.content);
  };
  return (
    <tr>
      <td >
        Post {props.message.id}
      </td>
      <td>
          <p className="message" >

            {props.message.content}
          </p>
      </td>
      <td>
        <Moment format="YYYY-MM-DD HH:mm">{props.message.created_at}</Moment>
      </td>
      <td>
        {props.message.published === 0 ? (
          <span>
            Unpublished
          </span>
        ) : (
          <span>
            Published
          </span>
        )}
      </td>
      <td>
        <div className="button--flex">
          <span
            id={props.message.id}
            className="button button--small button--small-success"
            onClick={showInModal}
          >
            View
          </span>
          {props.message.published === 1 ? (
            <>
              <span
                className="button button--small button--small-success"
                onClick={publishHandler}
              >
                Publish Again
              </span>
              <span
                className="button button--small button--small-danger"
                onClick={deleteHandler}
              >
                Delete
              </span>
            </>
          ) : (
            <>
              <span
                className="button button--small button--small-success"
                onClick={publishHandler}
              >
                Publish
              </span>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default AnonymousYellowItem;
