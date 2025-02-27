import React from 'react';
import menicon from '../../public/images/man.png';
import Passwordfield from '../components/Passwordfield';

export default function Signup() {
  return (
    <div className='text-black w-screen h-screen bg-blue-400 flex justify-center '>
      <div className='bg-slate-300  w-5/6 rounded-md h-fit mt-4'>
        <div className='flex items-center justify-center space-x-10 p-2'>
          <h3 className='text-center text-4xl font-semibold italic text-gray-900 underline'>Signup For Individual</h3>
          <img src={menicon} className='h-20 w-20' />
        </div>

        <div className='grid grid-cols-3 gap-2 px-4'>
          <div className='flex flex-col'>

            <div>
              
            </div>
            <label className='italic t text-gray-900 after:content-["*"]'>First Name</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="First Name" />
          </div>

          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Middle Name</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Middle Name" />
          </div>


          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Last Name</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Last Name" />
          </div>

          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Email</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Email" />
          </div>


          <div className='flex flex-col'>
           <Passwordfield/>
          </div>


          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Confirm Password</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Confirm Password" />
          </div>


          <div className='flex flex-col'>
            <label className=' text-gray-900'>Resident country</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Resident country" />
          </div>


          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Phone Number</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Phone Number" />
          </div>


          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Date of Birth</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Date of birth" />
          </div>

          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Nationality</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Nationality" />
          </div>

          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Street Address 1</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Street Address 1" />
          </div>



          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Street Address 2</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Street Address 2" />
          </div>

          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>City</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="City" />
          </div>


          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>State/Province</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="State Province" />
          </div>


          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Zip Code</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Zip Code" />
          </div>


          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Select Country</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Select Country" />
          </div>


          <div className='flex flex-col'>
            <label className='italic  text-gray-900'>Gender</label>
            <input type="text" id="success" class="bg-indigo-450 border border-gray-800 text-gray-900  placeholder-gray-900  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   opacity-80" placeholder="Select Gender" />
          </div>

        </div>

        <div>
            <button className='text-white '>Prev</button>       
            <button className='text-white'>Next</button>       
        </div>

      </div>

      <div>

      </div>


    </div>
  )
}
