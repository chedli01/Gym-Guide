import Forms from "./Forms";
export default function Signin({page,handlePageSign}){
    return <div className={`w-screen h-screen backImage ${page=="Signin"?"flex items-center justify-center":"hidden"} `} >
        
            <Forms handlePageSign={handlePageSign} />

        

    </div>
}