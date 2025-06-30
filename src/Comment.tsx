
import axios from "axios";
import { useQuery } from "react-query";

interface CommentProps{
    id: number
}
const CommentComp = ({id}: CommentProps) =>{
    console.log('id:', id, 'url:', `https://dummyjson.com/posts/${id}/comments`)
    //const 
    const {data, isLoading} = useQuery('comment'+id, async()=>{
        const response = await axios.get(`https://dummyjson.com/posts/${id}/comments`)
        return response.data
    })

    console.log('total:', data?.total);
    if(isLoading){
        return <p>Loading!!!!!</p>
    }

    return(<td>{data.total || 0}</td>)

}
export default CommentComp;