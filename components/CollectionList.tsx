import { currentUser } from '@clerk/nextjs'
import React from 'react'
import prisma from '../lib/prisma';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import SadFace from '@/components/icons/SadFace';
import { CreateCollectionBtn } from '@/components/CreateCollectionBtn';

const CollectionList = async () => {
  const user = await currentUser();

  const collections = await prisma.collection.findMany({
    where: {
      userId : user?.id
    }
  });

  if(collections.length == 0) {
    return (
      <div className='flex flex-col gap-5'>
        <Alert>
          <SadFace />
          <AlertTitle>There is no collection yet!</AlertTitle>
          <AlertDescription>Create a collection to get started.</AlertDescription>
        </Alert>
        <CreateCollectionBtn />
      </div>
    )
  }

  return (
    <div>CollectionList</div>
  )
}

export default CollectionList