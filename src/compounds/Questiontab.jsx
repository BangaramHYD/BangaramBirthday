import { useRecoilState } from "recoil";
import { button, buttonstateatom } from "./Atoms";

export const Question=()=>{
    const [buttonstate,setbuttonstate] = useRecoilState(buttonstateatom);
    return <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center w-96 h-96 bg-green-500 bg-cover bg-center rounded-lg shadow-lg">
        <h1 className="text-white text-2xl font-bold">Esari party...??</h1>
        <button className=' mb-72 ml-24' onClick={()=>setbuttonstate((pre)=>!pre)}>X</button>
        </div>
    </div>
}