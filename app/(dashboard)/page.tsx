import WelcomeMsg from "@/components/WelcomeMsg";
import CollectionList from "@/components/CollectionList";
import { Suspense } from "react";
 
export default async function Home() {

  return (
    <>
    <WelcomeMsg />
    <Suspense fallback={<div>Loading Collections</div>}>
       <CollectionList />
    </Suspense>
     
    </>
  )
}