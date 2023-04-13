import Image from "next/image";
import { useEffect } from "react";

export default function movieContent({request}) {

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
        companies: request.production_companies
        
    }

    
    

  return (
    <div>
        
        
        <div className="relative h sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
        <Image layout="fill" className="object-cover" src={details.poster}/>
          <div className="absolute px-2 top-10 w-full ">
            {/* title */}
            <p className="text-5xl font-bold md:text-8xl">{details.title}</p>

            {/* Overview/Description */}
            <p className="w-[50%] text-2xl">{details.description}</p>

            {/* Popularity */}
            <p>{details.votes}</p>
          </div>

          <div className="absolute bottom-0 w-full h-20 md:h-60 bg-gradient-to-b from-transparent to-black" />
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
    </div>
  )
}

export async function getServerSideProps(context){
    const mediaId = context.query.movieId; 
    const request = await fetch(`https://api.themoviedb.org/3/movie/${mediaId}?api_key=${process.env.API_KEY}`
    ).then(res => res.json()); //fetchs the data linked to the url assosiated with genre acquired
    
    //returning the result of request
    return {
      props: {
        request
      },
    }
    }