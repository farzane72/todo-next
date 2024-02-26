function RadioButton(props) {
    const {title,status,setStatus,children}=props
  return (
    <>
      <label className="flex gap-1 items-center    ">
       
        {children}
        {title}
      </label>
      <input className="" type="radio" name="option"
       value={title} onChange={(e)=>setStatus(e.target.value)}
       checked={status === title} />
    </>
  );
}

export default RadioButton;
