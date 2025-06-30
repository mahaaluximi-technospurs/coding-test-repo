
import axios from "axios";
import { useQuery } from "react-query";

interface CommentProps{
    id: number
}
const CommentComp = ({id}: CommentProps) =>{
    console.log('id:', id, 'url:', `https://dummyjson.com/posts/${id}/comments`)
    const {data, isLoading} = useQuery('comment', async()=>{
        const response = await axios.get(`https://dummyjson.com/posts/${id}/comments`)
        return response.data
    })

    if(isLoading){
        return <p>Loading!!!!!</p>
    }

    return(<p>{data.total}</p>)

}
export default CommentComp;