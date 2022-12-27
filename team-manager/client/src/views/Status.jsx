import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
// import { useParams } from "react-router-dom"; 
const Status = () => {
    const [teams,setTeams] = useState([]);
    const [loaded,setLoaded] =useState(false);
    // const [loaded1,setLoaded1] =useState(false);
    // const [team,setTeam] = useState({});
    // const { id } = useParams();
    // const navigate = useNavigate();
    // const mybtn={
    //     team.game1==='undecided'?
    // }
        useEffect(()=>{
            axios.get('http://localhost:8000/api/teams/')
            .then(res=>{
            setTeams(res.data);
            setLoaded(true);
            })
            .catch(err=>console.error(err));
        },[])

        const changeColor=(pId,x)=>{
            axios.put("http://localhost:8000/api/teams/"+pId,{game1:x})
            .then(res=>{const objIndex = teams.findIndex((obj => obj._id === pId));
                const teams1 = [ ...teams.slice(0, objIndex), { ...teams[objIndex], "game1": x } ,...teams.slice(objIndex+1)];
            setTeams(teams1);
            })
    }
return (
    <div>
                <table>
                    <tbody>
            <tr>
                <th>Team Name :</th>
                <th>Prefered position :</th>
                <th>Actions:</th>
            </tr>
        {loaded && teams.map((team,i)=> <tr key={i}><td><Link to={"/status/game/1"}>{team.name}</Link></td><td>{team.position}</td><td><button onClick={(e)=>changeColor(team._id,'playing')} style={team.game1 ==='playing'?{backgroundColor:'green'}:{}}>Playing</button> <button onClick={(e)=>changeColor(team._id,'not')} style={team.game1 ==='not'?{backgroundColor:'red'}:{}}>Not playing</button> <button onClick={(e)=>changeColor(team._id,'undecided')} style={team.game1 ==='undecided'?{backgroundColor:'yellow'}:{}}>Undecided</button></td></tr> )}
        </tbody>
        </table>
    </div>
  )
}

export default Status