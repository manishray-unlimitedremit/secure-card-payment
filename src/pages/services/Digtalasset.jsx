import React from 'react';
import Bankpngone from '../../../public/images/digitalasset/digitalasset.png';


export default function Digtalasset() {
  return (
 
     <div className='bg-slate-200 opacity-80 h-fit w-80 flex justify-center rounded-md items-center  p-4'>
              <input type='checkbox' />

         <div className='flex justify-center items-center space-x-9'>
         <img src={Bankpngone} className='h-20 '/>
         <div className='flex items-center justify-center' >
             <div className='flex flex-col'>
         <span className='text-2xl font-bold  text-center'>Digital Asset</span>
 
         <ul className='text-sm'>
             <li className='italic'>Digital Banking Accounts</li>
             <li className='italic'>Mobile Payments</li>
             <li className='italic'>Peer-to-Peer Transfers</li>
             <li className='hidden'>Budgeting Tools</li>
             <li className='hidden'>Investment Options</li>
             <li className='hidden'>Personalized Financial Advice</li>
             <li className='hidden'>Loan Applications</li>
             <li className='hidden'>Insurance Services</li>
             <li className='hidden'>Insurance Services</li>
             <li className='hidden'>Advanced Security Features</li>
             <li className='hidden'>Customer Support</li>
             
             
             
         </ul>
         </div>
         </div>
 
         </div>
     </div>
  )
}
