import ApiClient from './ApiClient'

export const __UploadFile = async (url) => {
  try {
    const res = await ApiClient.post(`/cloud/upload/image`, {url})
    return res.data
  } 
  catch(err) { throw err }
}

export const __LoadImages = async () => {
  try {
    const res = await ApiClient.get('/cloud/images')
    const imgUrls = res.data.map(img => img.url)
    return imgUrls
  } 
  catch(err) { throw err }
}

export const __DeleteAll = async () => {
  try {
    const res = await ApiClient.delete('/cloud/images')
    return res.data
  } 
  catch(err) { throw err }
}
