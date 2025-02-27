import React from 'react';
import individualuserpng from '../../public/images/man.png';


export default function AccountOption() {
    return (
        <div className='w-screen h-screen bg-indigo-950 px-4'>
            <h3 className='text-white font-semibold text-2xl pt-2'>Open Universal Currency Account</h3>
            <p className='text-white text-sm w-5/6 mt-6 border-b pb-4 italic'>Universal Currency Account (UCA) is our service to provide you with named bank accounts and virtual IBANs in your own name at various banks all over the world for all of your banking needs. You can select the type of account that you need so that this is provisioned for you. After the application, you can check on the 'STATUS'to see what the status of your account is.</p>
         <h3 className='text-sm mt-3'>Select Account</h3>
            <div className='flex p-4 space-x-12 flex-wrap space-y-4'>
                
                <div className='flex space-x-10 bg-slate-700 w-96 round-md opacity-80 p-4 rounded-md'>
                    <div>


                        <img src={individualuserpng} className='h-32 w-82' />
                    </div>

                    <div>
                        <h3 className='font-semibold'>AED</h3>
                        <p>
                            Open Emirati Dirham (AED) account in United Arab Emirates in a virtual IBAN account.</p>
                    </div>
                </div>

                <div className='flex space-x-10 bg-slate-700 w-96 round-md opacity-80 p-4 rounded-md'>
                    <div>


                        <img src={individualuserpng} className='h-32 w-82' />
                    </div>

                    <div>
                        <h3 className='font-semibold'>GBP</h3>
                        <p>
                            Open Emirati Dirham (AED) account in United Arab Emirates in a virtual IBAN account.</p>
                    </div>
                </div>

                <div className='flex space-x-10 bg-slate-700 w-96 round-md opacity-80 p-4 rounded-md'>
                    <div>


                        <img src={individualuserpng} className='h-32 w-82' />
                    </div>

                    <div>
                        <h3 className='font-semibold'>AED</h3>
                        <p>
                            Open Emirati Dirham (AED) account in United Arab Emirates in a virtual IBAN account.</p>
                    </div>
                </div>

                <div className='flex space-x-10 bg-slate-700 w-96 round-md opacity-80 p-4 rounded-md'>
                    <div>


                        <img src={individualuserpng} className='h-32 w-82' />
                    </div>

                    <div>
                        <h3 className='font-semibold'>Eur</h3>
                        <p>
                            Open Emirati Dirham (AED) account in United Arab Emirates in a virtual IBAN account.</p>
                    </div>
                </div>

                <div className='flex space-x-10 bg-slate-700 w-96 round-md opacity-80 p-4 rounded-md'>
                    <div>


                        <img src={individualuserpng} className='h-32 w-82' />
                    </div>

                    <div>
                        <h3 className='font-semibold'>DKK</h3>
                        <p>
                            Open Emirati Dirham (AED) account in United Arab Emirates in a virtual IBAN account.</p>
                    </div>
                </div>
            </div>

            <div className='flex space-x-4'>
              

              <a href='signup'>Next</a>
            </div>
        </div>
    )
}
