import Form from "./Form";

export default function Login({page,handlePage,handleSign}){
    return <div className={`w-screen h-screen backImage ${page=="Login"?"flex items-center justify-center":"hidden"} `} >
        
            <Form handlePage={handlePage} handleSign={handleSign}/>

        

    </div>
}