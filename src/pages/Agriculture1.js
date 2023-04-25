import { Link } from "react-router-dom"
import planting from "../images/planting.png"
import manufacturing from "../images/manufacturing.png"
import community from "../images/community.png"
import mining from "../images/mining.png"
import construction from "../images/construction.png"
import cleaning from "../images/cleaning.png"
import emergency from "../images/emergency.png"
import education from "../images/education.png"
import fertilizer from "../images/fertilizer.jpg"
import seeds from "../images/seeds.png"
import crops from "../images/crops.jpg"
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Agriculture1() {
  return (
    <div className="content1">
      <div className="title">
              <ul style={{marginTop:"90px"}}>
                  <Link to="/services">
                  <li><h5>Category</h5></li>
                  </Link> <AiOutlineDoubleRight style={{marginRight:"10px"}} />
                  <Link to="/agriculture1">
                  <li><h5 > Agriculture</h5></li>
                  </Link>
              </ul>
              <h2 style={{marginTop:"30px"}}>Agriculture Checklists</h2>
              
              <hr></hr>
              <div className="flex-container" style={{marginLeft:"-40px"}}>
              <Link to="/agriculture1" className="marketplace">
              <div>
              
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={seeds} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Seeds</h4>
                {/* <BsThreeDots /> */}
              </div> 
              
            </div>
            </Link>
            <Link to="/manufacture" className='marketplace'>
            <div>
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={fertilizer} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Fertilizer</h4>
                {/* <BsThreeDots /> */}
              </div> 
            </div>
            </Link>
            <Link to="/community" className='marketplace'>
            <div>
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={crops} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>crops</h4>
                {/* <BsThreeDots /> */}
              </div> 
            </div>
            </Link>
            {/* <Link to="/mining" className='marketplace'>
            <div>

              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={mining} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Mining</h4>
                 
              </div> 
            </div>
            </Link>
            <Link to="/construction" className='marketplace'>
            <div>
            
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={construction} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Construction</h4>
                 
              </div> 
              
            </div>
            </Link>
            <Link to="/cleaning" className='marketplace'>
            <div>
              
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={cleaning} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Cleaning</h4>
                
              </div> 
              
            </div>
            </Link>
            <Link to="/emergency" className='marketplace'>
            <div>
              
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={emergency} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Emergency</h4>
                
              </div> 
              
            </div>
            </Link>
            <Link to="/education" className='marketplace'>
            <div>
              
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={education} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Education</h4>
                 
              </div> 
              
            </div>
            </Link>
             */}
      </div>
      </div>
    </div>
  )
}
