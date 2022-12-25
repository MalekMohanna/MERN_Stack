import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
const Main = (props) => {
const [authors,setAuthors] = useState([]);
const [loaded,setLoaded] =useState(false);
const navigate = useNavigate();
const styles ={
  borders:'1px black solid'
}
const removeFromDom = authortId => {
  setAuthors(authors.filter(author => author._id !== authortId));
}
  useEffect(()=>{
    axios.get('http://localhost:8000/api/authors/')
    .then(res=>{
      setAuthors(res.data);
      setLoaded(true);
    })
    .catch(err=>console.error(err));
  },[])


  return (
        <div>
          <Link to={'/new'}>Add an author:</Link>
          <table>
            <tr>
              <th className='tcell'>Author</th>
              <th className='tcell'>Actions available</th>
            </tr>
            {loaded && authors.map((author,i)=>(<tr key={i}>
              <td className='tcell'>{author.name}</td>
              <td className='tcell'><button onClick={(e)=>navigate('/edit/'+author._id)}>Edit</button><DeleteButton authorId={author._id} successCallback={removeFromDom} /></td>
            </tr>))}
          </table>
        </div>
  )
}

export default Main