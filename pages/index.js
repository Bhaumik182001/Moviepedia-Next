import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Result from '../components/Result'
import response from '../utils/response'

//main home page which act as default page
export default function Home({movieData}) {
  
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Moviepedia</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3418/3418886.png" />
      </Head>

      <Header /> 
      <Navbar /> 
      <Result pullingData={movieData}/> 
    </div>
  )
}

//follwing function renders the datas that is to be fetched as serverside before showing running Home compnent at client side
export async function getServerSideProps(context){
const genre = context.query.genre; //looks for genre={value} in context or url
const request = await fetch(`https://api.themoviedb.org/3/${
  response[genre]?.url || response.fetchTrending.url
}`
).then(res => res.json()); //fetchs the data linked to the url assosiated with genre acquired

//returning the result of request
return {
  props: {
    movieData : request.results
  },
}
}
