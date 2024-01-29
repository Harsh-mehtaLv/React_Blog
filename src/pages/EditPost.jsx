import React, { useEffect,useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'


const EditPost = () => {
    const [post, setposts] = useState(null)
    const {slug} = useParams() // slug means url here
    const navigate = useNavigate()

    useEffect(() => {
        // if slug hai to kam kro nahi to nahi 
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setposts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate]) // if slug or navigate me any change ho to fir se run kro
   return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
   ) : null
      // ab return conditionally krna hai ki post hai ya nahi  
}

export default EditPost