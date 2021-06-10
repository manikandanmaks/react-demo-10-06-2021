
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonial from './components/testimonial.js';
import Contact from './components/contact';
import Copyright from './components/copyright';
import Footer from './components/footer';
import React from 'react';

class App extends React.Component {
  
  render() {
      return (
        <div>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <Copyright/>
      </div>
      );
  }
}

export default App;
