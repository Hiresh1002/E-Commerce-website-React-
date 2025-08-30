import { SiNike } from "react-icons/si";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa"; import { SlHandbag } from "react-icons/sl";


function Nav2(){
    return(<>
    
    <ol className="Secondnavbar"> <h1 className="SiNike"> <SiNike /></h1>
 <select className="dropdown">
           
          </select>|
    <li>Men</li>
    <li>Women</li>
    <li>Kids</li>
    <li>Sale</li>
    <li>SNKRS</li>
    <div className="right_icons"><span className="Search_icons"> <p  className="icons"><  RiSearch2Line /> <h3>Search</h3></p></span>
    <p className="i_cart"><FaRegHeart /></p>
    <p className="i_bag"> <SlHandbag /></p>
    
    </div>



    </ol>
<div className="Offer_tag">
<dd>New Styles On Sale: Up To 40% Off <br />
     Shop All Our New Markdowns</dd>

</div>
    
    </>)
}
export default Nav2;