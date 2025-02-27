import React ,{useRef} from 'react';
import cardswipingvideo from '../../public/videos/Payment.mp4';
import exchangeRateficon from '../../public/images/exchange-rate.png';
import { TypeAnimation } from 'react-type-animation';
import cardone from '../../public/images/cardpng/cardone.png';
import  '../App.css';



export default function Signin() {

  


  return (
  <>

       <div className='bg-gradient-to-r from-black to-cyan-400 w-screen h-screen flex flex-col space-y-8 justify-center items-center'>
     
       <img src={cardone} className="fall-animation absolute" alt="Card" />

        <TypeAnimation
         sequence = {[
          'Welcome to EasySwipe',
          'Sign In to Continue',
          'EasySwippes is a platform that allows you to make payments with ease',
          'We are here to make your payments easy and secure',
          'Sign In to continue',
          
          
         ]}
         wrapper="span"
         speed={10}
         repeat={Infinity}

         style={{ fontSize: '2em', display: 'inline-block' }}

        
        />
        
         <h3 className='text-white-600 text-4xl font-bold italic hidden'>EasySwipe</h3>
         <div className='flex  justify-between  rounded-md '>
         <video  src={cardswipingvideo} className="h-96 rounded-l-md " autoPlay loop muted />
 
 
 
           <div className=' w-96 h-96 rounded-md p-8  bg-slate-300 opacity-80'>
            
             <h1 className='text-center   text-black opacity-100 text-2xl font-semibold'>Sign In</h1>
 
             <div className='inputelements flex flex-col space-y-4'>
 
               <div>
                 <label className="text-black font-semibold">Email/Phone</label>
                 <input type="text" id="success" class="bg-green-50 border border-white    text-sm rounded-lg focus:ring-white block w-full p-2.5  " placeholder="Email" />
               </div>
 
 
               <div>
                 <label className='text-black font-semibold'>Password</label>
                 <input type="text" id="success" class="bg-green-50 border border-white    text-sm rounded-lg focus:ring-white block w-full p-2.5  " placeholder="Password" />
                 <button className='bg-blue-600 p-2 w-full mt-4 text-black font-semibold rounded-md cursor-pointer'>Sign In</button>
                 <div className='flex items-center justify-center mt-2'>
                   <div className='flex flex-col'>
                     <h3>Don't have An Account ? <a href='selectAccounttype' className='text-black'>Signup</a></h3>
                     <div className='flex  justify-center items-center space-x-4'>
                       <h3 className='text-center mt-2'>FX Rates</h3>
                       <img src={exchangeRateficon} className='h-8 w-9 bg-cover' />
                     </div>
                   </div>
                 </div>
               </div>

             </div>

           
           </div>
         </div>
       </div>
     </>
  )
}
