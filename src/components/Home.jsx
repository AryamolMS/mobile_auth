import React from 'react'

function Home() {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
            <input type="text" className='form-control w-50' placeholder='phoneno'/>
            <button className='mt-4 btn btn-primary'>Sned OTP</button>


            <input type="text" className='form-control w-50 mt-5'placeholder='enter otp' />
            <button className='mt-3 btn btn-success'>Verify</button>
        </div>
    </>
  )
}

export default Home