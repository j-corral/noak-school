import type { NextPage } from '@hoomies/noak.types.next';
import useTranslation from 'next-translate/useTranslation';

import { Hero } from '@hoomies/unagui.components.hero';

const Home: NextPage = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Hero title={t('msg:welcome')} section={{ w: '99vw', bgColor: 'transparent' }}></Hero>
    </>
  );
};

export default Home;
