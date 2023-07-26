interface Input{
name?:string;
type?:string;
id?:string;
placeholder?:string;
onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input: React.FC<Input>=({type,placeholder,onChange,name})=>{
    return( <input 
        type={type} 
        placeholder={placeholder} 
        className="input input-bordered w-full max-w-xs m-2" 
        name={name}
        onChange= {onChange}
        />)
    
}

export default Input;