import BlogPostsCell from 'src/components/BlogPostsCell'
import BlogLayout from 'src/layouts/BlogLayout'

const HomePage = ({ page = 1 }) => {
  return (
    <BlogLayout>
      <BlogPostsCell page={page} />
    </BlogLayout>
  )
}
export default HomePage
