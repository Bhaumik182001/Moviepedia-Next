import React from 'react'
import Image from "next/image"

//component used for displaying each value taking icon and titles as props
function HeaderItem({title, Icon}) {
  const styles = {
    container: "flex flex-col cursor-pointer w-12 sm:20 group items-center hover:text-white",
    headerImage: "h-8 mb-1  group-hover:animate-bounce",
    headerTitle: "opacity-0 tracking-widest group-hover:opacity-100"
  }

    return (
    <div className={styles.container}>
        <Icon className={styles.headerImage} />
        <p className={styles.headerTitle}>{title}</p>
    </div>
  )
}

export default HeaderItem