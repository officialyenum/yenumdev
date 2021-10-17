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
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {props.id + 1}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        <p className="break-normal ...">{props.message.content}...</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Moment format="YYYY-MM-DD HH:mm">{props.message.created_at}</Moment>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {props.message.published === 0 ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Unpublished
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Published
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex inline-flex justify-content-between">
          <button
            id={props.message.id}
            className="flex shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 mx-2 rounded"
            onClick={showInModal}
          >
            View
          </button>
          <button
            className="flex shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 mx-2 rounded"
            onClick={publishHandler}
          >
            Publish
          </button>
          {props.message.published === 1 ? (
            <button
              className="flex shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 mx-2 rounded"
              onClick={deleteHandler}
            >
              Delete
            </button>
          ) : (
            <></>
          )}
        </div>
      </td>
    </tr>
  );
};

export default AnonymousYellowItem;
