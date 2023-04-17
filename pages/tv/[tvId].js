
export default function tvContent({request}) {

    const BASE_URL = "https://image.tmdb.org/t/p/original/"

    const details = {
        title: request.title,
        description: request.overview,
        popularity: request.popularity,
        release_date: request.release_date,
        revenue: request.revenue,
        votes: request.vote_count,
        runtime: request.runtime,
        status: request.status,
        poster: `${BASE_URL}${request.backdrop_path}`,
        link: request.homepage,
        imdb: `https://www.imdb.com/title/${request.imdb_id}/`,
        companies: request.production_companies
    }

    console.log(request);

  return (
    <div>
        {/* title */}
        <p>{details.title}</p>

        {/* Overview/Description */}
        <p>{details.description}</p>

        {/* Popularity */}
        <p>{details.popularity}</p>
        
        <img src={details.poster}/>

        {request.production_companies.map((obj)=>{
            return <img key={obj.id} className="h-10" src={`${BASE_URL}${obj.logo_path}`}/>
        })}
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
    const mediaId = context.query.tvId; 
    const request = await fetch(`https://api.themoviedb.org/3/tv/${mediaId}?api_key=${process.env.API_KEY}`
    ).then(res => res.json()); //fetchs the data linked to the url assosiated with genre acquired
    
    //returning the result of request
    return {
      props: {
        request
      },
    }
    }