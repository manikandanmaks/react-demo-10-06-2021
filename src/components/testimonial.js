import React, { Component } from 'react';
import imgs  from '../images/img-10.png';
import { client } from '../client';
class testimonial  extends Component {
    state = { testiList:[] }
    componentDidMount() {
      client.getEntries({ content_type: 'testimonial' })
        .then((response) => {
          console.log(response)
          this.setState({
            testiList: response.items
          })
        })
        .catch(console.error)
       
    }
    render() { 
        const divStyle = {
            backgroundColor:' #fee421', color: '#fff', padding: '0px 5px'
          };
        return ( 
            <React.Fragment>
                       <div className="testi_monial_section layout_padding">
		<div className="container">
           <div id="my_carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            {this.state.testiList.map((testi, index) =>
            <div className="carousel-item active">
            <h1 className="testi_monila_text">{testi.fields.title1} <span style={divStyle}>{testi.fields.title2} </span></h1>
  <div className="testimonila_inner">
    <div className="testing_img"><img src={testi.fields.testiimage.fields.file.url} alt="ai"/></div>
    <h2 className="helina_text">{testi.fields.contenttitle}</h2>
    <p className="dolor_text">{testi.fields.content}</p>
  </div>
</div>)

          }
                
          </div>
   
  
  <a className="carousel-control-prev" href="#my_carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#my_carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
		</div>
	</div>
            </React.Fragment>
         );
    }
}
 
export default testimonial;