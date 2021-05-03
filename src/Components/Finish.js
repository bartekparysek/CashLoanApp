import React from 'react'
import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';


export default function Finish() {
   return (
      <div className="finish">
         <div className="finish-message">
            <MdCheckCircle />
            <h3>Your applicacation has been submited</h3>
            <Link to='/'>
               <button> Start Again</button>
            </Link>
         </div>
      </div>
   );
};
