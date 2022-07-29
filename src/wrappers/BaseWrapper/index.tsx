
import { Outlet } from '@umijs/max'

const BaseWrapper = () => {
  return <div>
    <div>Umijs Demo</div>
    <Outlet />
  </div>
}

export default BaseWrapper;
