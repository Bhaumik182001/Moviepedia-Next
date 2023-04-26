import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link"

const Thumbnail = forwardRef(({data, recommend}, ref ) => {
   const styles = {
        container: `hover:z-5 sm:hover:scale-105 cursor-pointer transition transform duration-200 ease-in p-2 group ${recommend && "items-center"}`,
        img: `${!recommend ? "sm:max-w-2xl" : "object-contain h-[200px]"}`,
        desc: "mt-2 truncate max-w-md",
        thumbnailTitle: ` text-2xl mt-1 text-white group-hover:font-bold transition-all ease-in-out duration-100`,
        details: "flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-100",
    }

   const BASE_URL = "https://image.tmdb.org/t/p/original/"

    return(
    <Link href={`/${!data?.media_type ? "movie" : data?.media_type}/${data?.id}`}>
        
       
        <div ref={ref} className={styles.container}>
           {/* native next image component used for better speed and performance */}
           <Image 
           layout="responsive"
           src={`${BASE_URL}${recommend ? data.poster_path : data.backdrop_path}` || `${BASE_URL}${data.poster_path}`} className={styles.img} width={1920} height={recommend ? 1980 : 1080}/>
           {/* details of media content */}
           <div className={`${recommend && "text-center"}`}>
                {/* <h1 className={styles.desc}>{data.overview}</h1> */}
                <h1 className={styles.thumbnailTitle}>{data.title || data.original_title || data.name}</h1>
                {/* <h1 className={styles.details}>{data.media_type && `${data.media_type} • `}{data.release_date || data.air_date || data.first_air_date}</h1> */}
            </div>
        </div>
    </Link>
    )
})

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;