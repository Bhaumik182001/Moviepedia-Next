import '../styles/globals.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <div>
     <Head>
        <title>Moviepedia</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3418/3418886.png" />
      </Head>

      
      <Component {...pageProps} />
    </div>
  )
  
  
}

export default MyApp
