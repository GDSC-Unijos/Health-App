import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import onboard from '../data/OnboardData';



export default function Onboard(){
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        flexDirection: "column",
    }
    const settings = {
        dots: true, // Show navigation dots
        arrows: false, // Hide navigation arrows
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return(
        <div className="slide-container ">
            <Slide {...settings}>
                {onboard.map((image) => (
                    <div className='' key={image.id} style={{...divStyle, backgroundColor:'#263A5C'}}> 
                        <img src={image.src} alt="" 
                        style={{width:'43%', height:'40%', display:"flex", marginTop:"30%"}}
                        />
                        <h2  className='text-[#FBFBFB] sm:text-2xl h-[10%] mb-40 w-80% m-[50px] text-center'  >{image.text}</h2>
                    </div>
                ))}
            </Slide>
           
            
        </div>
    )

}