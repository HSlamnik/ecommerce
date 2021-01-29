import CollectionPreview from 'components/CollectionPreview/CollectionPreview';

import { SHOP_DATA } from 'utils/constants';

const Shop = () => {
  const collections = SHOP_DATA;

  return (
    <div>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

export default Shop;
