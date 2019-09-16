import React from 'react';
import CarouselPage from './Components/HomePage'
import Rating from './Components/rating'
import ButtonPage from './buttunC'

const Home =()=>{
    return (<div>
        <CarouselPage/>
        <>
        <br/>
        <br/>
        <center>
        
        <h1>Stages of the smart phone industry</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IQZycjXZAKI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </center>
          </>
         <>
              <center>
              <h1>Comments</h1>
              </center>
              </>
          <div style ={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
              
          <Rating title='Sara' contain='The shipping was very fast and the payment secure, I truly recommend it !' subhead='16/09/2019' plus=' Twenty Seven ' src='/phone1.jpg'/>
          <Rating title='Lora' contain='This website is well designed and it is immersive !' subhead='16/09/2019' plus='Twenty Seven ' src='/phone2.jpg'/>
        <Rating title='Korolin' contain='I ordered a brand new phone today and it arrived really fast, I m so happy !' subhead='16/09/2019' plus=' Twenty Seven' src='/phone3.jpg'/>
        
           </div>
          <br/>
          <br/>
          <br/>
          
               <ButtonPage/>
          
         
    </div>
    )

}
export default Home