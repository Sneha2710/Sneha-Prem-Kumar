import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

 export default function Login(){

    return(
        <>
           <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>&nbsp;</div>
                    <div className='col-lg-6'>
                        <div className='table-responsive'>
                            <div className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Login</th>

                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr>
                                        <td>Email</td>
                                        <td><input type="email" name="email" id="email"/>
                                        
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td><input type="password" name='password' id='password' />
                                        
                                        </td>
                                    </tr>
                                
                                        <td>
                                            
                                        <input type="button" value="Login" className='btn btn-danger' name="data_send"/>
                                        
                                        </td>
                                    
                                    
                                        <td><Link to='/register'><input type="button" value="register" className='btn btn-primary'/></Link></td>
                                    
                                </tbody>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>&nbsp;</div>
                </div>
            </div>
        </>
    )
}