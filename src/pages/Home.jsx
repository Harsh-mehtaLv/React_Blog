import React, { useEffect,useState } from 'react'
import { Container, PostCard} from '../components'
import appwriteService from '../appwrite/config'


const Home = () => {
    const [posts, setPosts] =  useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) =>{
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

   // ab check krna hai ki posts hai ya nahi hai post ski length kya hai uske basis pe hum check karenge

//    if posts nahi hai 
   if (posts.length === 0) {
    return (
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
   }

//    if posts hai 
   return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => {
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard {...post} /> {/* sari posts k liye spread kro */}
                    </div>
                })}
            </div>
        </Container>
    </div>
   )
}

export default Home