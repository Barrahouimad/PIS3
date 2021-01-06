import react from 'react';
import { makeStyles } from '@material-ui/styles';
import '../font.css'
import {Button, NavLink,Image, NavbarBrand} from 'reactstrap';
import { Link } from 'react-router-dom';

import 'bootstrap-social/bootstrap-social.css';
function Home(){
  
  return(
       <footer>
        
          <div id='home' >
             
              <h1 id="text" className="text-secondary pt-5 pl-5 ">
                  FORUM <strong className="text-danger">EMI</strong> ENTREPRISE
              </h1>
              <div className="d-flex justify-content-end">
                  <div  className="p-2">
                 <img style={{ height:400,width:580}} src='assets/biblio.png'></img>
                 </div>
                     <div  className="p-2" id="socialmedia" >
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i ></i></a>
              <a className="btn btn-social-icon btn-twitter" href="http://www.facebook.com/profile.php?id="><i className="fa fa-twitter"></i></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.facebook.com/profile.php?id="><i className="fa fa-linkedin"></i></a>
                    </div>
            </div>
      
             <div id='buttons' className="row "> 
                <div  id="btn1" style={{border :'2px solid ',fontSize:'35px',borderColor:'#CDCACA',color:'#CDCACA',paddingtop:"14px",paddingLeft:"14px"}}>
                <NavLink className="pt-1 text-light" href={"/Signup"}> Signup</NavLink>
               </div>
               <div  id="btn2" style={{border:'2px solid ',borderright : "5px",fontSize:'35px',borderColor:'#CDCACA',color:'#CDCACA',paddingRight:"12px",paddingLeft:"14px"}}>
                  <NavLink className="pt-1 text-light" href={"/Login"}> Log in</NavLink>
               </div>
              
            </div>
         </div>
 
      </footer>

  );


}
export default Home;