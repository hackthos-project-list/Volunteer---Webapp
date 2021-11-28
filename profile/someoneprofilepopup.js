import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Shopping from "../../../assets/img/shopping.png";
import Phone from "../../../assets/img/phone.png";
import Chat from "../../../assets/img/chat.png";
import pic from "../../../assets/img/volunteer.png";
import pic1 from "../../../assets/img/Vector.png";
import pic2 from "../../../assets/img/food.png";
import pic3 from "../../../assets/img/driving.png";
import pic4 from "../../../assets/img/med.png";
import pic5 from "../../../assets/img/other.png";
import pic6 from "../../../assets/img/clock.png";
import pic7 from "../../../assets/img/bell.png";
import pic8 from "../../../assets/img/heart.png";
import pic9 from "../../../assets/img/eheart.png";
import pic10 from "../../../assets/img/Ellipse27.png";
import pic11 from "../../../assets/img/close.png";

class SomeoneProfilePopup extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
			<div className="w2">
				<img id="r1" src={pic} />
				<img id="e7a" src={pic10} />
				<img id="e8b" src={pic10} />
				<img id="e9c" src={pic10} />
				<img id="e9d" src={pic11} />
				<p id="r2">Jane Green</p>
				<p id="r3">3# Country Rank</p>
				<img alt="" id="r18a" src={pic8} />
				<img alt="" id="r19b" src={pic8} />
				<img alt="" id="r20c" src={pic8} />
				<img alt="" id="r21d" src={pic8} />
				<img alt="" id="r22e" src={pic9} />
			</div>
			
			<p id="e1">Who I am:<br></br>
					I’m an art student in NYU with lots of extra time. Looking to help my local community.</p>
			<p id="e2"><br></br>Why I’m here:<br></br> Helping the elderly in my neighborhood has been contributing a lot to my good mood and activity levels during this time. I love meeting my neighbors and hearing their stories!</p>
			<div className="w3">
				<div className="w1a">
					<img alt="" src={pic2} id="r4"/>
					<img alt="" src={pic3} id="r5"/>
					<img alt="" src={pic4} id="r6"/>
					<img alt="" src={pic5} id="r7"/>
				</div>
				<p id="e3">Total Tasks:</p>
				<p id="e4">34</p>
				<p id="e5">Past 30 days:</p>
				<p id="e6">8</p>
			</div>
		</section>
      </div>
    );
  }
}

export default SomeoneProfilePopup;
