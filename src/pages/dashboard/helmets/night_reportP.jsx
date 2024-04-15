import { Helmet } from 'react-helmet-async';

import NightReport from 'src/sections/helmets/night_report';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Night Report</title>
      </Helmet>

      <NightReport />
    </>
  );
}
