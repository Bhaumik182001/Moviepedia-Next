import Image from "next/image";
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem";

function Header() {
    const styles = {
        container: "mx-5 mt-5 mb-3 flex flex-col sm:flex-row h-auto my-auto justify-between h-auto ",
        headerList: "flex flex-grow max-w-2xl justify-evenly",
        imageContainer: "object-contain",
        font: "font-bold text-5xl cursor-pointer"
    }
    
    {/* Header component using HeaderItem component which uses svg icons imported from heroicon as props*/}
    return(
        <header className={styles.container}>
           <div className={styles.headerList}>
                <HeaderItem title="Home" Icon={HomeIcon}/>
                <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
                <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
                <HeaderItem title="Collection" Icon={CollectionIcon}/>
                <HeaderItem title="Search" Icon={SearchIcon}/>
                <HeaderItem title="Account" Icon={UserIcon}/>
            </div>

            {/* setting logo for Header */}
           <h1 className={styles.font}>Moviepedia</h1>
           
        </header>
    )
}

export default Header;