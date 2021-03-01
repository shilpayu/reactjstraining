import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

function EmployeeList(){
    let [employees,setEmployees] = useState([]);
    let [id,setId] = useState('');
    let [firstname,setfirstName] = useState('');
    let [lastname,setlastName] = useState('');
    let [email,setEmail] = useState('');
    let [isEdit,setIsEdit] = useState(false);
    const url = 'http://localhost:3000/employees/';
    useEffect(() => {
        EmployeesList();
    },[])
    async function EmployeesList () {
        let results = await axios.get(url);
        console.log(results);
        setEmployees(results.data);
        console.log(employees);
    }
    async function AddEmployee() {
        let emp = {
            "id":id,
            "first_name":firstname,
            "last_name":lastname,
            "email":email
        }
        let results = await axios.post(url,emp);
        console.log(results);
        EmployeesList();
    }
    async function deleteRow(id){
        axios.delete(url+id).then(response => {
            EmployeesList();
        });
    }
    async function getEmployeebyId(id){
        axios.get(url+id).then(response => {
            setId(response.data.id);
            setfirstName(response.data.first_name);
            setlastName(response.data.last_name);
            setEmail(response.data.email);
        });
    }
    async function EditEmployee(){
        axios.put(url+id,{
            id:id,
            first_name:firstname,
            last_name:lastname,
            email:email
        });
        EmployeesList();
    }
    return (
        <div>
            <div>Employee List : {employees && employees.map(e => (<h3 key={e.id}><Link to={`/employees/${e.id}`}>{e.first_name}</Link></h3>))}</div>
            <h1>Add Employee</h1>
            <form>
                <label>Id: </label>
                <input type="text"
                   id="id"
                   name="id"
                   value={id}
                   disabled={isEdit ? 'true' : 'false'}
                   onChange={event=>setId(event.target.value)}
                />
                <label>First Name: </label>
                <input type="text"
                   id="firstname"
                   name="firstname"
                   value={firstname}
                   onChange={event=>setfirstName(event.target.value)}
                />
                <label>Last Name: </label>
                <input type="text"
                   id="lastname"
                   name="lastname"
                   value={lastname}
                   onChange={event=>setlastName(event.target.value)}
                />
                <label>Email: </label>
                <input type="email"
                   id="email"
                   name="email"
                   value={email}
                   onChange={event=>setEmail(event.target.value)}
                />
                <button onClick={isEdit ? EditEmployee : AddEmployee}>{isEdit ? "Update" : "Add"}</button>
            </form>
            <div>
                <Table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((e) => (
                    <tr>
                    <td >{e.id}</td>
                    <td>{e.first_name}</td>
                    <td>{e.last_name}</td>
                    <td>{e.email}</td>
                    <td><button key={e.id} onClick={()=>deleteRow(e.id)}>delete</button></td>
                    <td><button key={e.id} onClick={()=>{ setIsEdit(true);getEmployeebyId(e.id)}}>Edit</button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
           </div>
        </div>
    );
}
export default EmployeeList;