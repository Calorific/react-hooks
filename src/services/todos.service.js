import httpService from './http.service'

const todosEndpoint = 'todos/'

const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndpoint, {
      params: {
        _page: 1,
        _limit: 3
      }
    })
    return data
  },
  add: async (task) => {
    const { data } = await httpService.post(todosEndpoint, task)
    return data
  }
}

export default todosService