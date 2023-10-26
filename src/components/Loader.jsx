import React from 'react';

function Loader() {
    return (
        <div>
            <div className='absolute w-full h-screen  backdrop-blur-[1px] z-30 flex justify-end top-0 left-0'>

            </div>
            <div className='absolute right-0 top-0 w-full h-screen z-30 flex justify-end md:w-4/5'>
                <div className=' w-full h-screen  flex justify-center items-center z-40'>
                    <div className='flex gap-2 justify-center items-center bg-white p-6 border rounded-md shadow-md shadow-gray-200'>
                        <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-pink-500 rounded-full" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <h1 className='text-pink-500'>Processing...</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Loader;
