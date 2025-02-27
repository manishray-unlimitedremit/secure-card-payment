import React from 'react';
import Bank from '../services/Bank';
import Digtalasset from '../services/Digtalasset';
import Card from '../services/Card';
import cardpng from '../../../public/images/cardpng/card.png';



export default function services() {
  return (
    <div className='flex space-x-20 space-y-8   justify-center  p-12 items-center h-screen bg-gradient-to-r from-black to-cyan-400'>
                 <img src={cardpng} className='h-96'></img>

        <div className='flex flex-col space-y-8'>

        <h1 className='font-semibold text-3xl'>Select Our Services</h1>

        <Bank/>
        <Digtalasset/>
        <Card/>
        </div>
    </div>
  )
}
