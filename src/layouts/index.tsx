import { Outlet } from '@umijs/max';

const BaseWrapper = () => {
  return (
    <div>
      <Outlet context={{ test: 1 }} />
    </div>
  );
};

export default BaseWrapper;
