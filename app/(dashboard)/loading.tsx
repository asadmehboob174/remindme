import { Skeleton } from "@/components/ui/skeleton"



const loading= ({}) => {
  return (
    <div className='flex w-full mb-12'>
      <h1 className='text-4xl font-bold'>
         <Skeleton className="w-[180px] h-[36px] mb-1"></Skeleton>
         <Skeleton className="w-[150px] h-[36px]"></Skeleton>
      </h1>
    </div>
  )
}

export default loading