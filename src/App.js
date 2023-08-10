import { NavLink, Redirect, Route, Switch, useLocation, useParams } from 'react-router-dom'

const AppLayout = () => {
  return (
      <>
        <h1>App Layout</h1>
        <NavLink to="/users" exact>Users List Page</NavLink>
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
        <li><NavLink to="/users" exact>Users List Page</NavLink></li>
        <li><NavLink to={'/users/' + userId + '/edit'} exact>Edit this user</NavLink></li>
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
          <li><NavLink to={'/users/' + userId + '/profile'} exact>User Profile Page</NavLink></li>
          <li><NavLink to={'/users/' + ((+userId || 0) + 1) + '/profile'} exact>Another User</NavLink></li>
          <li><NavLink to="/users" exact>Users List Page</NavLink></li>
        </ul>

      </>
  )
}

const UsersList = () => {
  return (
    <>
      <ul>
        {[1, 2, 3, 4, 5].map(u => <li key={u}><NavLink to={`/users/${u}/profile`} exact>User {u}</NavLink></li>)}
      </ul>
    </>
  )
}

const UsersLayout = () => {
  const { pathname } = useLocation()
  const { userId } = useParams()
  return (
      <>
        <h1>Users Layout</h1>
        <NavLink to="/" exact>Main Page</NavLink>

        <br />

        <Switch>
          <Route path="/users" component={UsersList} exact />
          <Route path="/users/:userId" render={() => <Redirect to={pathname + '/profile'} />} exact />
          <Route path="/users/:userId/profile" component={UserProfile} exact />
          <Route path="/users/:userId/edit" component={UserEdit} exact />
          <Route path="/users/:userId/*"  render={() => <Redirect to={'/users/' + userId + '/profile'} />} />
        </Switch>

      </>
  )
}


const App = () => {
  return (
      <>
        <Switch>
          <Route path="/users/:userId?/:type?" component={UsersLayout} />
          <Route path="/" component={AppLayout} exact />
          <Route path="*" render={() => <Redirect to={AppLayout} />} />
        </Switch>
      </>
  )
}

export default App
