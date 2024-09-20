
import Content from "./Content/Content";
import Menu from "./Sidebar/Menu";




export default function Body() {
  
  

  return <div className="w-full h-5/6 absolute top-36 flex justify-center items-center">
        <Menu   />
        <Content  /> 
        </div>
    
  
}
