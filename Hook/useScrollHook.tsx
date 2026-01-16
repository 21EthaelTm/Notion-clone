import { useState,useEffect }  from 'react'


const UseScrollHook = (thershold = 10) => {
    const [scrolled,setScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > thershold){
                setScrolled(true)
                } else {
                   setScrolled(false)
                }

        }
      window.addEventListener("scroll",handleScroll)
      return ()=>{ window.removeEventListener("scroll",handleScroll);} 
    },[])
  return scrolled;
}

export default UseScrollHook