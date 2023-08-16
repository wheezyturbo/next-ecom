// import Image from 'next/image'
import Grid from "@/components/Grid/Grid";

import SideBar from "@/components/SideBar/SideBar";
export default function Home() {
  return (
    <>

      <h1 className="text-center">Products</h1>
      <div className="flex justify-evenly">
        <SideBar className="w-4/12"/>
        <Grid className="w-8/12 mb-10"/>
      </div>
    </>
  )
}