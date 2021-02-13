import HomeItem from 'components/Home/HomeItem';

import { SHOP_SECTIONS } from 'utils/constants';

const Home = () => {
  return (
    <HomeItem sections={SHOP_SECTIONS} />
  );
};

export default Home;
