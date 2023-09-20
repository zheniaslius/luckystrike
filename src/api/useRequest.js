import useSwr from 'swr'
import useSWRMutation from 'swr/mutation'

const baseUrl = 'http://localhost:3000/api'

export const useRequest = (path, name) => {
    if (!path) {
        throw new Error('Path is required')
    }

    const url = name ? baseUrl + path + '/' + name : baseUrl + path
    const { data, error } = useSwr(url)

    return { data, error }
}

async function update(url, { arg }) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  })
}

export const useMutate = (path, body) => {
  const url = baseUrl + path
  const { trigger } = useSWRMutation(url, update, body)
  return trigger
}