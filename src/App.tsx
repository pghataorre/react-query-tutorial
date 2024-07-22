import './App.css'
import { useQuery } from '@tanstack/react-query'
import getPosts from './api/getPosts/getPosts'
import Loader from './Components/Loader/Loader';
import Error from './Components/Error/Error';
import BloggPosts from './Components/BloggPosts/BloggPosts';

const App = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['blogsPosts'], // <= Identifies the query and is used as the cache key for the query
    queryFn: async () => {
      return await getPosts();
    }
  });

  return (
    <div>
      <h1>React Query Tutorial - </h1>
      <p>Blogg example example from a test api</p>
      { isLoading && <Loader /> }
      { (data && (<BloggPosts bloggPosts={data} />)) }
      { isError && <Error comments="Cant load Blogg Posts right now"/>}
    </div>
  )
}

export default App
