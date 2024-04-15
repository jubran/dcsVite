import { Helmet } from 'react-helmet-async';

import HomeView from 'src/sections/helmets/home';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Home</title>
      </Helmet>

      <HomeView />
    </>
  );
}
