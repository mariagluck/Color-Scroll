import LandingPoster from '../images/volcano.jpeg';
import Heading from '../components/Heading';
import './Home.css';



export default function Home() {

    window.addEventListener("scroll", function() {

        let scroll = window.pageYOffset;
    
        if (scroll > 5000) {
            document.body.style.backgroundColor = '#F19031';
        } else if (scroll > 4000) {
            document.body.style.backgroundColor = '#FFAB00';
        } else if (scroll > 3000) {
            document.body.style.backgroundColor = '#43A047';
        } else if (scroll > 2000) {
            document.body.style.backgroundColor = '#FF6F00';
        } else if (scroll > 1000) {
            document.body.style.backgroundColor = '#0091EA';
        } else {
            document.body.style.backgroundColor = '#FF4081';
        }
    
    });
   

    return <div className="HomePage">
        <Heading />
         <div className="panel" data-color="white">  
         <img src={LandingPoster} 
              alt="colors_scroll" 
              className="volcano" /> 
         </div> 
    </div>;

}



