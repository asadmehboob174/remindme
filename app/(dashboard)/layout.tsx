import React, { FC } from 'react'

interface layoutProps {
  children : React.ReactNode
}

const layout: FC<layoutProps> = ({children}) => {
  return (
    <div className='flex flex-col items-center [min-height:90vh] w-full'>
      <div className='flex flex-grow w-full justify-center dark:bg-neutral-950'>
        <div className='max-w-[920px] flex flex-col flex-grow px-4 py-12'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout