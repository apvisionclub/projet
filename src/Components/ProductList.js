import React, {Component} from 'react';
import Product from './product';
import Title from './Title'
// import {storeProducts} from '../data';
// import {ProductConsumer} from '../context';
import Card from './Card'
const storeProducts = [
    // {
    //   id: 1,
    //   title: "Google Pixel - Black",
    //   img: "img/product-1.png",
    //   price: 10,
    //   company: "GOOGLE",
    //   info:
    //     "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    //   inCart: false,
    //   count: 0,
    //   total: 0
    // },
    {
      id: 1,
      title: "Android Q",
      img: "img/product-6.jpg",
      price: 16,
      company: "SAMSUNG",
      info:
        "A mobile phone allows its user to make and receive telephone calls to and from the public telephone network which includes other mobiles and fixed line phones across the world. It does this by connecting to a cellular network owned by a mobile network operator.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 2,
      title: "PaceQ",
      img: "img/product-3.jpg",
      price: 8,
      company: "htc",
      info:
        "In addition to being a telephone, modern mobile phones also support many additional services, and accessories, such as SMS (or text) messages, email, Internet access, gaming, Bluetooth, infrared, camera, MMS messaging, MP3 player, radio and GPS. ",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 3,
      title: "FireDroid",
      img: "img/product-4.jpg",
      price: 18,
      company: "htc",
      info:
        "mobile phone is a wireless handheld device that allows users to make and receive calls and to send text messages, among other features. The earliest generation of mobile phones could only make and receive calls.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 4,
      title: "KhanDroid",
      img: "img/product-5.jpg",
      price: 24,
      company: "htc",
      info:
        "Today’s mobile phones, however, are packed with many additional features, such as web browsers, games, cameras, video players and even navigational systems.",
      inCart: false,
      count: 0,
      total: 0
      
    },
    {
      id: 5,
      title: "RareX",
      img: "img/product-12.jpg",
      price: 17,
      company: "apple",
      info:
        "Nowadays people use various interactive applications or apps for social networking, mobile payments, mobile cab services, mobile music/video, online shopping, and many more. Smart and ethical use of a smartphone makes it even smarter.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 6,
      title: "LolaX ",
      img: "img/product-7.jpg",
      price: 30,
      company: "apple",
      info:
        "A key feature of the cellular network is that it enables seamless telephone calls even when the user is moving around wide areas via a process known as handoff or handover. ",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 7,
      title: "TwentyZ ",
      img: "img/product-8.jpg" ,
      price: 30,
      company: "apple",
      info:
        "A key feature of the cellular network is that it enables seamless telephone calls even when the user is moving around wide areas via a process known as handoff or handover. ",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 8,
      title: "K6 ",
      img: "img/product-9.jpg" ,
      price: 30,
      company: "apple",
      info:
        "A key feature of the cellular network is that it enables seamless telephone calls even when the user is moving around wide areas via a process known as handoff or handover. ",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 9,
      title: "L.F.K 9 ",
      img: "img/product-10.jpg" ,
      price: 30,
      company: "apple",
      info:
        "A key feature of the cellular network is that it enables seamless telephone calls even when the user is moving around wide areas via a process known as handoff or handover. ",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 10,
      title: "Moto1 ",
      img: "img/product-11.jpg" ,
      price: 30,
      company: "apple",
      info:
        "A key feature of the cellular network is that it enables seamless telephone calls even when the user is moving around wide areas via a process known as handoff or handover. ",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 11,
      title: "Formula 1",
      img: "img/product-13.jpg" ,
      price: 30,
      company: "apple",
      info:
        "A key feature of the cellular network is that it enables seamless telephone calls even when the user is moving around wide areas via a process known as handoff or handover. ",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 12,
      title: "Uno",
      img: "img/product-2.jpg",
      price: 8,
      company: "htc",
      info:
        "In addition to being a telephone, modern mobile phones also support many additional services, and accessories, such as SMS (or text) messages, email, Internet access, gaming, Bluetooth, infrared, camera, MMS messaging, MP3 player, radio and GPS. ",
      inCart: false,
      count: 0,
      total: 0
    }
    
    // {
    //   id: 8,
    //   title: "Smashed Iphone",
    //   img: "img/product-8.png",
    //   price: 2,
    //   company: "apple",
    //   info:
    //     "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    //   inCart: false,
    //   count: 0,
    //   total: 0
    // }
  ];
  
export default class  ProductList extends Component {
   constructor(props){
       super(props)
       this.state={
           cart:0
       }
   }
    render() {
        return (
            <React.Fragment>
        {/* <h1>{`Your number of item ${this.state.cart}`}</h1> */}
        <div className="py-5">
        <div className="container">
       
        <Title name="our" title="products"></Title>
        <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}> 
        {storeProducts.map((e)=><Card onClick={()=>this.setState({cart:this.state.cart+1})} item={e}/>)}
       </div>
        <div className="row">
          
           </div>
           </div>
           </div>
           

            </React.Fragment>
         
         
        );
         
    }
}