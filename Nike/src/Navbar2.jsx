import { SiNike } from "react-icons/si";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa"; import { SlHandbag } from "react-icons/sl";


function Nav2(){
    return(<>
    
    <ol className="Secondnavbar"> <h1 className="SiNike"> <SiNike /></h1>
<li>New & Featured</li>
    <li>Men</li>
    <li>Women</li>
    <li>Kids</li>
    <li>Sale</li>
    <li>SNKRS</li>
    <div className="right_icons"><span className="Search_icons"> <p  className="icons"><  RiSearch2Line /> <h3>Search</h3></p></span>
    <p><FaRegHeart /></p>
    <p> <SlHandbag /></p>
    
    </div>



    </ol>

    
    </>)
}
export default Nav2;