import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const images = () => {
  return db.image.findMany()
}

export const image = ({ id }) => {
  return db.image.findOne({
    where: { id },
  })
}

export const createImage = ({ input }) => {
  requireAuth()
  return db.image.create({
    data: input,
  })
}

export const updateImage = ({ id, input }) => {
  requireAuth()
  return db.image.update({
    data: input,
    where: { id },
  })
}

export const deleteImage = ({ id }) => {
  requireAuth()
  return db.image.delete({
    where: { id },
  })
}
