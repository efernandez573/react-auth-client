const axios = require('axios')

const apiUrl = 'http://localhost:4741'

// export const getBlogpost = () => {
//   return fetch(apiUrl + '/posts', {
//     method: 'GET'
//   })
// }

// export const axiosGetBlogpost = () => {
//   return axios.get(apiUrl + '/posts')
// }

// export const getBlogpostAuthenticated = (user) => {
//   return fetch(apiUrl + '/posts', {
//     method: 'GET',
//     headers: {
//       'Authorization':`Token token=${user.token}`
//     }
//   })
// }

export const axiosGetBlogpostAuthenticated = (user) => {
  return axios.get(apiUrl + '/posts', {
    headers: {
      'Authorization':`Token token=${user.token}`
    }
  })
}

// export const postBlogpost = (data, user) => {
//   return fetch(apiUrl + '/posts', {
//     method: 'POST',
//     headers: {
//       'Authorization': `Token token=${user.token}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ post: { ...data } })
//   })
// }

export const axiosPostBlogpost = (data, user) => {
  return axios.post(apiUrl + '/posts', { post: { ...data }}, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}


// export const patchBlogpost = (data, user) => {
//   const { id } = data
//   delete data.id
//   return fetch(apiUrl + '/posts/' + id, {
//     method: 'PATCH',
//     headers: {
//       'Authorization': `Token token=${user.token}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ post: { ...data } })
//   })
// }

export const axiosPatchBlogpost = (data, user) => {
  const { id } = data
  delete data.id
  return axios.patch(apiUrl + '/posts/' + id, { post: { ...data }}, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}
