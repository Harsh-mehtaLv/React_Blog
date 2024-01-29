import React from 'react'

const Container = ({children}) => {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
    // agar code one line ka hai like this to hum return se parenthies hata sakte hai like this Isme ; semicolumn lagana important hai jiss se code ko pata chale ki ye ek hi line hai. This will worl too   
}

export default Container