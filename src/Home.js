import { useEffect, useState } from "react";
import BlogList from './BlogList';

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:'Retrofit uses', body:'lorem psodjkf..',author: 'Revathi P',id :1},
        {title:'Paper uses', body:'sdsd lorem psodjkf..',author: 'Maya',id :2},
        {title:'Birthday cards', body:'hello lorem psodjkf..',author: 'Varsha',id :3},

    ]);

    const [name, setName] = useState("marios");

    const handleDeleteItem = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    useEffect(()=> {
        console.log("use effect ran")
    },[name]);

    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="All blogs" handleDeleteItem={handleDeleteItem}></BlogList>
          <p>{name }</p>
          <button onClick={()=> setName("DUa")} className="chnage-name">CHnage name</button>
        </div>
     );
}
 
export default Home;