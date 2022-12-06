import React from "react";

const ArticleList = ({stories}) => {


    const storiesList = stories.map((story, index)=>{
            return (
                <li key={index}>{story["title"]}</li>
            )
        })

    }
        return (
            <div>
                {storiesList}
            </div>
        )


export default ArticleList;