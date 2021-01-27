import MenuItem from 'components/Home/HomeItem';

import { SHOP_SECTIONS } from 'utils/constants';

const Home = () => {
  return (
    <MenuItem sections={SHOP_SECTIONS} />
  );
};

export default Home;
