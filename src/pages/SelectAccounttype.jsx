import React from 'react';
import individualuserpng from '../../public/images/man.png';
import constructionpng from '../../public/images/construction.png'

export default function SelectAccounttype() {
    return (
        <div className='h-screen w-screen bg-gradient-to-r from-black to-cyan-400 px-10 py-10  flex flex-col space-y-4'>
            <h3 className='text-white text-4xl font-semibold '>Select Account Type</h3>
            <div>
            <span className='text-white w-18 text-wrap text-xl border-b pb-8'>Looks like you have access to multiple accounts
                choose from the options below to get started or you can click on About us</span>
                </div>
            <div className='flex items-center justify-start space-x-4 mt-9'>
                <a href='/services'>
                <div className='bg-white flex p-9 rounded-md'>

                    <div className='flex'>
                        <div>
                            <img src={individualuserpng} className='h-32' />
                            <h3></h3>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-green-600 text-2xl  px-6 font-semibold'>Individual</h3>
                            <ul className="checklist w-96">

                                <li className="checklist-item">
                                    <span className="checkmark text-green-700 text-2xl">✔</span>
                                    <span className='text-gray-600'>Card Payment</span>
                                </li>
                                <li className="checklist-item">
                                    <span className="checkmark text-green-700 text-2xl">✔</span>
                                    <span className='text-gray-600'>PayBy Link</span>
                                </li>
                                <li className="checklist-item">
                                    <span className="checkmark text-green-700 text-2xl">✔</span>
                                    <span className='text-gray-600'>Mannual Deposite</span>
                                </li>

                            </ul>            </div>
                    </div>
                </div>
                </a>

                <div className='bg-white flex   p-9  rounded-md'>

                    <div className='flex'>
                        <div>
                            <img src={constructionpng} className='h-32' />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-green-600 text-2xl  px-6 font-semibold'>Institution</h3>
                            <div>
                                <ul className="checklist w-96">

                                    <li className="checklist-item">
                                        <span className="checkmark text-green-700 text-2xl">✔</span>
                                        <span className='text-gray-600'>Card Payment</span>
                                    </li>
                                    <li className="checklist-item">
                                        <span className="checkmark text-green-700 text-2xl">✔</span>
                                        <span className='text-gray-600'>PayBy Link</span>
                                    </li>
                                    <li className="checklist-item">
                                        <span className="checkmark text-green-700 text-2xl">✔</span>
                                        <span className='text-gray-600'>Mannual Deposite</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <a href='accountOption'>Next</a>

        </div>
    )
}
