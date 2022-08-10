import React from 'react'
import response from '../utils/response'
import { useRouter } from "next/router";

function Navbar() {
  const styles = {
    nav: "relative flex flex-row-reverse pb-5",
    container: "flex px-10 space-x-10 sm:px-20 whitespace-nowrap sm:px-20 sm:space-x-20 text-2xl overflow-x-scroll scrollbar-hide",
    item: "last:pr-24 cursor-pointer flex active:text-red-500 transform transition duration-100 hover:scale-125 hover:text-white",
    fader: "absolute right:0 top:0 w-1/12 h-10 bg-gradient-to-l from-black",
  }

  const router = useRouter();
  
  {/* mapping each value from response.js to h2 tag */}
  return (
    <nav className={styles.nav}>
       
        <div className={styles.container}>
          {Object.entries(response).map(([key, {title, url}])=>(
              <h2 className={styles.item} key={key} onClick={()=> router.push(`/?genre=${key}`)}>{title}</h2>
            ))}
        </div>
       
       {/* special div tag for the purpose of fader effect */}
       <div className={styles.fader} />
    </nav>
  )
}

export default Navbar