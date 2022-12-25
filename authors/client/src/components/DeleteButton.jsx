import axios from 'axios';
import React from 'react'

const DeleteButton = (props) => {
const {authorId,successCallback} = props;

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                successCallback(authorId);
            })
            .catch(err => console.error(err));
    }

  return (
    <button onClick={deleteProduct}>Delete</button>
  )
}

export default DeleteButton