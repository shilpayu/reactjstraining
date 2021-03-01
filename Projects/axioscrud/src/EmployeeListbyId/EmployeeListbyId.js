import React,{useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';

function EmployeeListbyId({match}){
    let [employeelist,setEmployeesList] = useState([]);
    useEffect(() => {
        EmployeesListsbyId();
    },[]);
    async function EmployeesListsbyId() {
        console.log(match);
        let results = await axios.get(`http://localhost:3000/employees/${match.params.id}`);
        console.log(results);
        setEmployeesList(results.data);
        console.log(employeelist);
    }
    return (
        <div>Employee List By Id : {employeelist && <h3 key={employeelist.id}>{employeelist.first_name}</h3>}</div>
    );
}
export default EmployeeListbyId;