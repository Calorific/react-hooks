import { Navigate, NavLink, Outlet, useParams, useRoutes } from 'react-router-dom'

const AppLayout = () => {
  return (
      <>
        <h1>App Layout</h1>
        <NavLink to="/users">Users List Page</NavLink>
      </>
  )
}

const UserProfile = () => {
  const { userId } = useParams()
  return (
    <>
      <h2>User Page</h2>
      <h3>UserId: {userId}</h3>

      <ul>
        <li><NavLink to="/users">Users List Page</NavLink></li>
        <li><NavLink to={'/users/' + userId + '/edit'}>Edit this user</NavLink></li>
      </ul>
    </>
  )
}

const UserEdit = () => {
  const { userId } = useParams()
  return (
      <>
        <h2>User Page</h2>
        <h3>UserId: {userId}</h3>

        <ul>
          <li><NavLink to={'/users/' + userId + '/profile'}>User Profile Page</NavLink></li>
          <li><NavLink to={'/users/' + ((+userId || 0) + 1) + '/profile'}>Another User</NavLink></li>
          <li><NavLink to="/users">Users List Page</NavLink></li>
        </ul>
      </>
  )
}

const UsersList = () => {
  return (
    <>
      <ul>
        {[1, 2, 3, 4, 5].map(u => <li key={u}><NavLink to={`/users/${u}/profile`}>User {u}</NavLink></li>)}
      </ul>
    </>
  )
}

const UsersLayout = () => {
  return (
      <>
        <h1>Users Layout</h1>
        <NavLink to="/">Main Page</NavLink>

        <br />
        <Outlet />
      </>
  )
}


const routes = [
  {
    path: '',
    element: <AppLayout />
  },
  {
    path: 'users',
    element: <UsersLayout />,
    children: [
      {
        path: '',
        element: <UsersList />
      },
      {
        path: ':userId',
        element: <Navigate to='profile' replace />
      },
      {
        path: ':userId/profile',
        element: <UserProfile />
      },
      {
        path: ':userId/edit',
        element: <UserEdit />
      },
      {
        path: ':userId/*',
        element: <Navigate to='profile' replace />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' replace />
  },
]

const App = () => {
  const elements = useRoutes(routes)
  return (
      <>
        {elements}
      </>
  )
}

export default App
