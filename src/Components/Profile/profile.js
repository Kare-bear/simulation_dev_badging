import React, {Component} from 'react';

import './Profile.css';


export default class Profile extends Component{
    render(){
        return(
            <div className = 'profile_main'>
                
                <div className = 'profile_title'>
                    <div>*user pic*</div>
                    <div>User Name</div>
                    <button>Update</button>
                    <button>Cancel</button>
                </div>
                
                <div className='profile_container'>
                    <h5>First Name</h5>
                    <input type = "text"/>

                    <h5>Last Name</h5>
                    <input type = "text"/>

                    <h5>Gender</h5>
                    <select>
                    <option>Male</option>
                    <option>Female</option>
                    </select>

                    <h5>Hair Color</h5>
                    <select>
                    <option>Blonde</option>
                    <option>Brown</option>
                    <option>Black</option>
                    </select>

                    <h5>Eye Color</h5>
                    <select>
                    <option>Blue</option>
                    <option>Brown</option>
                    <option>Green</option>
                    </select>

                    <h5>Hobby</h5>
                    <select>
                    <option>Movies</option>
                    <option>Video Games</option>
                    <option>Travel</option>                    
                    </select>

                    <h5>Birthday Day</h5>
                    <select>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>                    
                    </select>

                    <h5>Birthday Month</h5>
                    <select>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>                    
                    </select>

                    <h5>Birthday Year</h5>
                    <select>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>                    
                    </select>

                </div>
            </div>
        )
    }
}
