import Image from "next/image";
import StarRating from "../../components/StarRating";
import { ArrowLeftIcon, LinkIcon } from "@heroicons/react/outline";
import Link from 'next/link'
import Thumbnail from "../../components/Thumbnail";

export default function movieContent({request, cast, trailer, recommended}) {

  const styles = {
    icon: "w-7 text-black my-auto ",
    iconLabel: "text-2xl my-auto text-black pr-2",
    button: "flex bg-white rounded-md px-2 py-1 active:scale-95 hover:scale-110 transform transition duration-2000 ease-linear"
  }

    const BASE_URL = "https://image.tmdb.org/t/p/original/"

    const details = {
        title: request.title,
        description: request.overview,
        popularity: request.popularity,
        release_date: request.release_date,
        revenue: request.revenue,
        votes: parseInt(request.vote_average/2, 10),
        runtime: request.runtime,
        status: request.status,
        poster: `${BASE_URL}${request.backdrop_path}`,
        link: request.homepage,
        imdb: `https://www.imdb.com/title/${request.imdb_id}/`,
        companies: request.production_companies,
        crew: cast.filter(res=> res.known_for_department == "Acting").slice(0, 5),
        video: trailer?.filter(res=> res.type=="Trailer")[0]?.key ||  "https://www.yotube.com"
    }

    console.log(recommended.results)
    

  return (
    <div className="">
        
        
        <div className="relative h sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
        <Image layout="fill" className="object-cover" src={details.poster}/>
          <div className="  absolute px-2 top-10  mx-auto ">
            {/* title */}
            <p className="text-white drop-shadow-lg shadow-black text-5xl font-bold md:text-8xl">{details.title}</p>
           
           {/* Popularity */}
            <StarRating rating={details.votes}/>

            {/* Overview/Description */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-300  shadow-black text-2xl">{details.description}</p>
              </div>
              <div>
                {/* <div className="flex space-x-2">
                  {details.crew.map(res=>{
                    return (
                      <div key={res.id} className="flex flex-col space-x-3 items-center justify-center my-auto">
                        <div key={res.profile_path} className="relative h-20 w-20"><Image layout="fill" className="rounded-lg" src={`${BASE_URL}${res.profile_path}`}/></div>
                        <p className="break-all max-w-[180px]" key={res.id}>{res.name}</p>
                      </div>
                    )
                  
                  })}
                </div> */}
                <div className="flex space-x-4 z-20 ">

                <Link href={"/"}>
                <button  className={styles.button}>
                  <p className={styles.iconLabel}>Go Back</p>
                  <ArrowLeftIcon className={styles.icon}/>
                </button>
                </Link>
                
               
                <a href={details.link} className={styles.button}>
                  <p className={styles.iconLabel}>Visit Site</p>
                  <LinkIcon className={styles.icon} />
                </a>
               
                

                
                
                <a href={details.imdb} className="lg:px-5 my-auto lg:py-3 rounded-md bg-yellow-300 flex hover:scale-110 transform transition duration-400 ease-linear active:scale-95">
                  <p className="text-black text-2xl font-extrabold">IMDB</p>
                </a>

                <a href={`https://www.youtube.com//watch?v=${details.video}`} className="lg:px-5 my-auto lg:py-3 rounded-md bg-red-600 flex hover:scale-110 transform transition duration-1000 ease-linear active:scale-95">
                  <p className="text-white text-2xl font-semibold">Trailer</p>
                </a>
                </div>
                
              </div>
            </div>
            

            
          </div>

          <div className="absolute bottom-0 w-full h-20 md:h-40 bg-gradient-to-b from-transparent to-black z-0" />
        </div>

      {/* Production_company */}
        {/* {request.production_companies.map((obj)=>{
            return <img key={obj.id} className="h-10" src={`${BASE_URL}${obj.logo_path}`}/>
        })} */}


        {/* Production Company */}
        {/* Production Country */}
        {/* Release Date */}
        {/* Revenue */}
        {/* vote */}
        {/* runtime */} 
        {/* spoken Language */}
        {/* status */}
        {/* Homepage */}
        {/* imdb id */}
        <h1 className="pl-10 text-6xl ">Recommended</h1>
        <div className="px-5 my-10 sm:grid md:grid-cols-3 lg:grid-cols-4 3xl:flex flex-wrap justify-center">
          {recommended.map((value)=>{
           return <Thumbnail recommend key={value.id} data={value}/>
          })}
         
        </div>
    </div>
  )
}

export async function getServerSideProps(context){
    const mediaId = context.query.movieId; 
    const request = await fetch(`https://api.themoviedb.org/3/movie/${mediaId}?api_key=${process.env.API_KEY}`
    ).then(res => res.json()); //fetchs the data linked to the url assosiated with genre acquired
    const cast = await fetch(`https://api.themoviedb.org/3/movie/${mediaId}/credits?api_key=${process.env.API_KEY}&language=en-US`).then(res => res.json()).then(res => res.cast)
    const trailer = await fetch(`https://api.themoviedb.org/3/movie/${mediaId}/videos?api_key=${process.env.API_KEY}`).then(res=>res.json()).then(res => res.results)
    const recommended = await fetch(`https://api.themoviedb.org/3/movie/${mediaId}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`).then(res=>res.json()).then(res => res.results)
    //returning the result of request
    return {
      props: {
        request,
        cast,
        trailer,
        recommended  
      },
    }
    }