import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link"

const Thumbnail = forwardRef(({data}, ref ) => {
   const styles = {
        container: "hover:z-5 sm:hover:scale-105 cursor-pointer transition transform duration-200 ease-in p-2 group",
        img: "sm:max-w-2xl",
        desc: "mt-2 truncate max-w-md",
        thumbnailTitle: `${data?.episode_run_time && "bg-yellow-500"} text-2xl mt-1 text-white group-hover:font-bold transition-all ease-in-out duration-100`,
        details: "flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-100",
    }

   const BASE_URL = "https://image.tmdb.org/t/p/original/"

    return(
    <Link href={`/${data?.media_type}/${data?.id}`}>
        
       
        <div ref={ref} className={styles.container}>
           {/* native next image component used for better speed and performance */}
           <Image 
           layout="responsive"
           src={`${BASE_URL}${data.backdrop_path || data.poster_path}` || `${BASE_URL}${data.poster_path}`} className={styles.img} width={1920} height={1080}/>
           {/* details of media content */}
           <div>
                <h1 className={styles.desc}>{data.overview}</h1>
                <h1 className={styles.thumbnailTitle}>{data.title || data.original_title || data.name} | {data?.media_type}</h1>
                <h1 className={styles.details}>{data.media_type && `${data.media_type} • `}{data.release_date || data.air_date || data.first_air_date}</h1>
            </div>
        </div>
    </Link>
    )
})

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;