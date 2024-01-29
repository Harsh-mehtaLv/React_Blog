import React, {useId, forwardRef} from 'react'

const Select = ({
    // 1 Ab properties yaha pe hum ye lenge lenge
    options, // dropdown k liye
    label,
    className = "", 
    ...props
    // ref iski reference k liye
}, ref) => { 
    // 2 and ab useId import kro 
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props} 
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {/* 3 loop options with array. options me value na hone pe loop hoga to ye crash kerega. iska solution ye hai. ki aap optionally loop krlo ki if options hai to loop kro with ? */}
            {options?.map((option) =>(
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        
        </div>
  )
}

export default React.forwardRef(Select) // forwardRef ko hum iss tarha se bhi use kr skte hai this is easy method