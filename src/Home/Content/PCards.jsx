export default function PCards({Name,url,Price}){
    return <div className=" rounded-md w-1/5 h-5/6 border-2 border-black flex flex-col justify-start items-center gap-y-6">
        <div ><img className="rounded-md" src={url} alt="" /></div>
        <div><h1 className="text-3xl">{Name}</h1></div>
        <div><h1 className="text-3xl">Price:{Price}</h1></div>
        <div className="w-1/3"><a href="https://ultimatenutrition.com/collections/protein-products"><button className="w-full h-14 bg-red-700 rounded-lg mb-4 text-white text-lg">Quick Buy </button></a></div>

    </div>
}