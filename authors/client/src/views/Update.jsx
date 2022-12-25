import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const Update = (props) => {
  const { id } = useParams();
  const [author, setAuthor] = useState({name:""});
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const [errors,setErrors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        console.log("useEffect");
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const updateAuthor = (author) => {
    axios
      .put("http://localhost:8000/api/authors/" + id, author)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch(err=>{console.error(err);
        const errorRespones = err.response.data.errors;
        const errorArr =[];
        for (const key of Object.keys(errorRespones)){
          errorArr.push(errorRespones[key].message)
        }
        setErrors(errorArr);
        });
  };
  return (
    <div>
      <h1>Update Name :</h1>
      {loaded && <Form onSubmitProp={updateAuthor} initialName={author.name} errors={errors} />}
    </div>
  );
};

export default Update;
