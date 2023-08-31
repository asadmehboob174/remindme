'use client'

import React from 'react'
import { Button } from './ui/button'
import CreateCollectionSheet from './CreateCollectionSheet';

export const CreateCollectionBtn = () => {
  const [open , setOpen] = React.useState(false);
  const handleOpenChange = (open: boolean) => {
    return setOpen(open);
  }


  return (
    <div className='w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px]'>
      <Button variant={'outline'} onClick={() => setOpen(true)} className='dark:text-white w-full dark:bg-neutral-950 bg-white text-md'>
         <span className='bg-gradient-to-r from-red-500 to-orange-500 hover:to-orange-800 bg-clip-text text-transparent '>
          Create collection
        </span>
      </Button>
      <CreateCollectionSheet open={open} onOpenChange={handleOpenChange} />
    </div>
  )
}
