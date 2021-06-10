import React, { Component } from 'react';

class contact extends Component {
    state = {  }
    render() { 
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
          }
          
          const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
          
          
        return ( 
        <React.Fragment>
             <div className="layout_padding contact_section">
    	<div className="container">
    		<div className="contact_section_inner">
    			<div className="contact_main">
    				<h1 className="contact_text">Contact Us</h1>
    				<div className="input_main">
    					<div className="row">
    						<div className="col-sm-6 col-lg-3">
    							<div className="form-group">
                                   <input type="text" className="email-bt" placeholder="Name" name="Email"/>
                                </div>
    						</div>
    						<div className="col-sm-6 col-lg-3">
    							<div className="form-group">
                                   <input type="text" className="email-bt" placeholder="Phone Number" name="Email"/>
                                </div>
    						</div>
    						<div className="col-sm-6 col-lg-3">
    							<div className="form-group">
                                   <input type="text" className="email-bt" placeholder="Email" name="Email"/>
                                </div>
    						</div>
    						<div className="col-sm-6 col-lg-3">
    							<div className="social_icon">
    								<ul>
    									<li><img src={images['fb-icon.png'].default} alt="c1"/></li>
    									<li><img src={images['twitter-icon.png'].default} alt="c2"/></li>
    									<li><img src={images['in-icon.png'].default} alt="c3"/></li>
    									<li><img src={images['instagram-icon.png'].default} alt="c4" /></li>
    								</ul>
    							</div>
    						</div>
    					</div>
    				</div>
    				<div className="massage_box">
    					<div className="row">
    						<div className="col-sm-8">
    							<form action="/action_page.php">
                                <div className="form-group">
                                  <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="text"></textarea>
                                </div>
                            </form>
    						</div>
    						<div className="col-sm-4">
    							<button className="send_bt">Send</button>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
        </React.Fragment> );
    }
}
 
export default contact;