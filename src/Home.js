import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {
    const [blogs] = useState([
        {title:'Retrofit uses', body:'lorem psodjkf..',author: 'Revathi P',id :1},
        {title:'Paper uses', body:'sdsd lorem psodjkf..',author: 'Maya',id :2},
        {title:'Birthday cards', body:'hello lorem psodjkf..',author: 'Varsha',id :3},

    ])
    
    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="All blogs"></BlogList>
        </div>
     );
}
 
export default Home;