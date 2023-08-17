import Grid from "@/components/Grid/Grid";

import SideBar from "@/components/SideBar/SideBar";
export default function page({params}) {
  return (
    <>

      <h1 className="text-center">Products</h1>
      <div className="flex justify-evenly">
        <SideBar className="w-4/12" category = {params.category}/>
        <Grid className="w-8/12" category={params.category}/>
      </div>
    </>
  )
}