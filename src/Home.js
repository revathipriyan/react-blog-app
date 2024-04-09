import { useEffect, useState } from "react";
import BlogList from './BlogList';

const Home = () => {
    const [blogs,setBlogs] = useState(null);

    const [name, setName] = useState("marios");

    const handleDeleteItem = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            }).then((data) => {
                console.log(data);
                setBlogs(data);
            });
    },[]);

    return ( 
        <div className="home">
         {blogs && <BlogList blogs={blogs} title="All blogs" handleDeleteItem={handleDeleteItem}></BlogList>}
          <p>{name }</p>
          <button onClick={()=> setName("DUa")} className="chnage-name">CHnage name</button>
        </div>
     );
}
 
export default Home;