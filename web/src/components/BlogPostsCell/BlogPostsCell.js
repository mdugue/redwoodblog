import BlogPost from 'src/components/BlogPost'
import Pagination from '../Pagination/Pagination'

export const QUERY = gql`
  query BlogPostsQuery($page: Int) {
    postPage(page: $page) {
      posts {
        id
        title
        body
        createdAt
      }
      count
    }
  }
`

export const beforeQuery = ({ page }) => {
  page = page ? parseInt(page, 10) : 1

  return { variables: { page } }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>
export const Success = ({ postPage }) => {
  return (
    <>
      {postPage.posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}

      <Pagination count={postPage.count} />
    </>
  )
}
