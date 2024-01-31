export const logoApp =
  'https://res.cloudinary.com/daij4l3is/image/upload/v1691522537/kdrragm16ba8srie54l0.webp'

export const title = 'AprendEnseñas'
export const url = 'https://braillease-git-main-larzlrael.vercel.app/'

export const description =
  'AprendEnseñas es una aplicación que te permite escribir en señas y aprender a leerlo.'

export function descriptionMeta(phrase: string) {
  return {
    logo: logoApp,
    title,
    description: `Asi se escribe ${phrase} en Braille`,
    url,
  }
}
