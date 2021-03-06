import React from 'react'
import NewsList from './NewsList/NewsList'
import Trending from './Trending/Trending.js'
import Video from './Video/Video'
import LatestArticles from './LatestArticles/LatestArticles'
import '../../../../common/common-styles.css'

const LeftSection = ({
    likeArticle,
    removeArticle
}) => {
    return (
        <div>
            <div className = "row">
                <NewsList
                    likeArticle = {likeArticle}
                    removeArticle = {removeArticle}
                />
            </div> 
            <div className = "row">
                <Trending/>
            </div>
            <div className = "row">
                <Video/>
            </div>
            <div className = "row">
                <LatestArticles/>
            </div>
        </div>
    )
}

export default LeftSection