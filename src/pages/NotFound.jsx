import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'

const NotFound = () => {
  return (
    <DashboardLayout>
      <div className='flex justify-center items-center'>
        <p className='text-4xl font-bold'>Looks like you took a wrong turn</p>
      </div>
    </DashboardLayout>
  )
}

export default NotFound