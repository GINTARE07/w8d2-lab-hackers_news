import React, {useState, useEffect} from "react";
import ArticleList from "../Components/ArticleList";

const HNContainer = () => {

    const [articleId, setArticlesId] = useState ([])
    const [stories, setStories] = useState([])
    

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
          .then(res => res.json())
          .then((data) => {
            const newData = data.slice(0, 20);
            const promises = newData.map((id) => {
              return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(res => res.json());
            });
    
            Promise.all(promises)
              .then((results) => {
                setStories(results);
                // setFilteredStories(results);
              });
          });
      }, []);
    
   
    // const getAllArticles = () => {
    //     const articlePromise = articleId.map((storyId)=> {
    //         return (
    //             fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
    //             .then(blah => blah.json())
    //             .then(blahs => blahs.title)
    //             // .then(values => values.title)                
    //             )
                
    //         })
    //     Promise.all(articlePromise)
    //     .then((data)=>{
    //         setStories(data);

    //     })
    // }

    return (
        <div>
            <h1>Hacker News Articles</h1>
            <ul>
                <ArticleList stories={stories} />
            </ul>
        </div>
    )
}

export default HNContainer;