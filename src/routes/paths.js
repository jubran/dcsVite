// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    jwt: {
      login: `${ ROOTS.AUTH }/jwt/login`,
      register: `${ ROOTS.AUTH }/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    units: `${ ROOTS.DASHBOARD }/units`,
    fts: `${ ROOTS.DASHBOARD }/fts`,
    tanks: `${ ROOTS.DASHBOARD }/tanks`,
    fus: `${ ROOTS.DASHBOARD }/fus`,
    nightReport: `${ ROOTS.DASHBOARD }/nightReport`,
    notes: `${ ROOTS.DASHBOARD }/notes`,
    privateDiscution: `${ ROOTS.DASHBOARD }/privateDiscution`,

    administration: {
      root: `${ ROOTS.DASHBOARD }/administration`,
      myProfile: `${ ROOTS.DASHBOARD }/administration/myprofile`,
      myGroup: `${ ROOTS.DASHBOARD }/administration/myGroup`,
      operationManagement: `${ ROOTS.DASHBOARD }/administration/operationManagement`,
      siteManagement: `${ ROOTS.DASHBOARD }/administration/siteManagement`,
    },

    forms: {
      root: `${ ROOTS.DASHBOARD }/forms`,
      datasheets: `${ ROOTS.DASHBOARD }/forms/datasheets`,
      wcm: `${ ROOTS.DASHBOARD }/forms/wcm`,
    },

    search: {
      root: `${ ROOTS.DASHBOARD }/search`,
      vehicles: `${ ROOTS.DASHBOARD }/search/vehicles`,
      search: `${ ROOTS.DASHBOARD }/search/search`,
    },

    safety: {
      root: `${ ROOTS.DASHBOARD }/safety`,
      swp: `${ ROOTS.DASHBOARD }/safety/swp`,
      tra: `${ ROOTS.DASHBOARD }/safety/tra`,
    },

    sequences: {
      root: `${ ROOTS.DASHBOARD }/sequences`,
      fts: `${ ROOTS.DASHBOARD }/sequences/fts`,
      units: `${ ROOTS.DASHBOARD }/sequences/units`,
    },
  },
};
