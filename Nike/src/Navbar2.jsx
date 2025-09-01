import { SiNike } from "react-icons/si";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa"; import { SlHandbag } from "react-icons/sl";


function Nav2(){
    return(<>
    
    <ol className="Secondnavbar"> <h1 className="SiNike"> <SiNike /></h1>
    <li>
        <details className="drop1"><summary >New & Featured</summary>
     {/* <li>New & Upcoming Drops</li>
    <li>New Arrivals</li>
    <li>Bestsellers</li>
    <li>SNKRS Launch Calendar</li>
    <li>Customise with Nike By You</li>
    <li>Jordan</li>
    
    </details></li>
    <li>Men</li>0
    <li>Women</li>
    <li>Kids</li>
    <li>Sale</li>
    <li>SNKRS</li> */}
    <div className="right_icons"><span className="Search_icons"> <p  className="icons"><  RiSearch2Line /> <h3>Search</h3></p></span>
    <p><FaRegHeart /></p>
    <p> <SlHandbag /></p>
    
    </div>



    </ol>
<div className="Offer_tag">
<dd   className="Offer_heilight">New Styles On Sale: Up To 40% Off <br />
     Shop All Our New Markdowns</dd>

</div>
    
    </>)
}
export default Nav2;