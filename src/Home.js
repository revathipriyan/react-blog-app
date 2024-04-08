import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'Retrofit uses', body:'lorem psodjkf..',author: 'Revathi P',id :1},
        {title:'Paper uses', body:'sdsd lorem psodjkf..',author: 'Maya',id :2},
        {title:'Birthday cards', body:'hello lorem psodjkf..',author: 'Varsha',id :3},

    ])
    
    return ( 
        <div className="home">
          {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
          ))}
        </div>
     );
}
 
export default Home;