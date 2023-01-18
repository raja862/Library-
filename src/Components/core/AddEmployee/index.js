import './addEmployee.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const navigate = useNavigate();
    const [employeeDetails, setEmployeeDetails] = useState({
        name: '',
        email: '',
        address: '',
        mobileNumber: '',
        bookName: ''
    })

    const handleInput = (value) => {
        return setEmployeeDetails(employee => {
            return {...employee, ...value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Submitting employee details...')
        try{
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/employees`, employeeDetails);
            if(response){
                setEmployeeDetails({
                    name: '',
                    email: '',
                    address: '',
                    mobileNumber: '',
                    bookName: ''
                });
                navigate('/');
            }
        }catch(error){
            console.log('Error: ', error)
        }
    }

    return (
        <div className="addEmployee">
            <h2>Add an People</h2>
            <form onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id='name' className="form-control" type='text' value={employeeDetails.name} onChange={e => handleInput({name: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id='email' className="form-control" type='text' value={employeeDetails.email} onChange={e => handleInput({email: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input id='address' className="form-control" type='text' value={employeeDetails.address} onChange={e => handleInput({address: e.target.value})} />
                </div>
               
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input id='mobileNumber' className="form-control" type='text' value={employeeDetails.mobileNumber} onChange={e => handleInput({mobileNumber: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="bloodGroup">Book Name</label>
                    <input id='bloodGroup' className="form-control" type='text' value={employeeDetails.bloodGroup} onChange={e => handleInput({BookName: e.target.value})}/>
                </div>

                <div className='form-group'>
                    <input className='btn btn-primary mt-2' type='submit' value='Add an Users' />
                </div>
            </form>
        </div>
    )
}

export default AddEmployee;