import React,{useState,useEffect} from 'react';
import axios from 'axios';
// import {  useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

const List = (props) => {
const [teams,setTeams] = useState([]);
const [loaded,setLoaded] =useState(false);
// const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/teams/')
        .then(res=>{
        setTeams(res.data);
        setLoaded(true);
        })
        .catch(err=>console.error(err));
    },[])
    const deleteTeam=id=>{
        axios.delete('http://localhost:8000/api/teams/' + id)
        .then(res => {
            setTeams(teams.filter(team => team._id !== id));
        })
        .catch(err => console.error(err));
    }
return (
    <div>
        <table>
            <tr>
                <th>Team Name :</th>
                <th>Prefered position :</th>
                <th>Actions:</th>
            </tr>
        {loaded && teams.map((team,i)=> <tr><td><Link to={"/status/game/1"}>{team.name}</Link></td><td>{team.position}</td><td><button onClick={(e)=>deleteTeam(team._id)} >Delete</button></td></tr> )}
        </table>
    </div>
)
}

export default List