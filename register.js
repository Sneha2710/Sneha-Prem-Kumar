import {Link} from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Register(){

    const handlesubmit= async(event)=>{
        event.preventDefault();
   
        var datastring =new
        FormData(event.target);
        var config ={headers:{"enctype":"multipart/form-data"}};

        
        let name =document.getElementById('name').value;
        let email=document.getElementById('email').value;
        let phone=document.getElementById('phone').value;
        let password= document.getElementById('password').value;
    
         
        if(name ===""|| name ===null)
        {
            alert('Enter name');
        }
        else if (email ===""|| email ===null)
        {
            alert('Enter email');
        }
        else if (phone ===""|| phone ===null)
        {
            alert('Enter phone');
        }
       
        else if ( password===""|| password ===null)
        {
            alert(' Enter password');
        }
        else {
            await axios.post('http://localhost:3004/log-in',(datastring,config))
            .then(function(res){
                if(res.data.status==='error'){
                    alert('Error');
                  window.location.reload();
                }
                else if(res.data.status==='inserted'){
                   alert('Profile Created');
                   window.location.href="./";}
            })
            .catch(function(err){
                alert(err);
                window.location.reload();
            })
        }
        }
    
    return(
        <>
        <div className="container">
        <div className="row">
        <div className="col-lg-3">&nbsp;</div> 
        <div className="col-lg-6">
        <form onSubmit={handlesubmit}>
        <div className="table-responsive">
        <table className="table table-bordered">
                      <thead>
                       <tr>
                        <th colSpan={2}>Register</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            <tr>
                            <td> User Name</td>
                            <td><input typ="text" name="name"id="name"className="form-control"/></td></tr>
                            <tr>
                            <td> User Email Id</td>
                            <td><input typ="text" name="email"id="email"className="form-control"/></td></tr>
                            <tr>
                            <td> User Phone</td>
                            <td> <input typ="number" name="phone"id="phone"className="form-control"/></td>
                            </tr>
                            
                            <tr>
                                <td> User password</td>
                                <td><input type="passowrd" name="password" id="password" className="form-control"/></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/login">
                                        <button type="button" name="data_change"id="data_change"className="btn btn-success">
                                            login
                                            </button>
                                            </Link>
                                    </td>
                                <td>
                                   
                                </td>
                                </tr>
                            </tbody>      
                   </table>
               </div> 
               </form> 
            </div>
            </div>
        </div>
        </>
    )

    }