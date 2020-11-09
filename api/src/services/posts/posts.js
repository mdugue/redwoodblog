import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

const POSTS_PER_PAGE = 5

export const postPage = ({ page = 1 }) => {
  const offset = (page - 1) * POSTS_PER_PAGE

  return {
    posts: db.post.findMany({
      take: POSTS_PER_PAGE,
      skip: offset,
      orderBy: { createdAt: 'desc' },
    }),
    count: db.post.count(),
  }
}

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }) => {
  return db.post.findOne({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  requireAuth()
  return db.post.create({
    data: input,
  })
}

export const updatePost = ({ id, input }) => {
  requireAuth()
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  requireAuth()
  return db.post.delete({
    where: { id },
  })
}
