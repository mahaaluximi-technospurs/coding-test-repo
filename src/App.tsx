
import { useQuery } from 'react-query'
import './App.css'
import axios from 'axios';
import CommentComp from './Comment';

interface reactions{
  likes: number;
  dislikes:number;
}

//Each item should present: title, body, the list of tags, reactions (like, dislike), views count and comments count
interface postInfo{
  id:number;
  title:string;
  body: string;
  tags:string[];
  reactions:reactions;
  views: number;
  userId: number;
}
interface postData{
  posts:postInfo[];
  total : number;
  skip: number;
  limit:number;
}

function App() {

  const {data, isLoading} = useQuery('post', async()=>{
    const response = await axios.get('https://dummyjson.com/posts')
    //console.log('respo:', response.data)
    return response.data as postData
  })

  if(isLoading){
    return "<h1>Loading...............</h1>"
  }

  //console.log(data);
  
  return (
    <>
      <div>
        <table>
          <thead>
            <th>Title</th>
            <th>Body</th>
            <th>Tags</th>
            <th>Reactions</th>
            <th>Views</th>
            <th>Comment</th>
          </thead>
          <tbody>
           {data?.posts.map((post)=>{
            return (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.tags}</td>
                <td>{post.views}</td>
                <td><CommentComp id={post.id}/></td>
              </tr>
            )
           })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
