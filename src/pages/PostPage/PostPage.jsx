import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import BottomBar from '../../components/BottomBar/BottomBar'
import PostHeader from './PostHeader'
import PostContent from './PostContent'

const PostPage = () => {
  return (
    <>
    <TopBar/>
    <PostHeader img={"/pic1.png"} title='Addon CC201 in Minecraft' username='Jions HD 1080p' date='15/2/2024'/>
    <PostContent/>
    <BottomBar/>
    </>
  )
}

export default PostPage