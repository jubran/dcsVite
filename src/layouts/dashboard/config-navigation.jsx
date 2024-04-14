import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();
  const data = useMemo(
    () => [
      // default roles : All roles can see this entry.
      // roles: ['user'] Only users can see this item.
      // roles: ['admin'] Only admin can see this item.
      // roles: ['admin', 'manager'] Only admin/manager can see this item.
      // Reference from 'src/guards/RoleBasedGuard'.
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('overview'),
        items: [
          { title: t('dashboard'), path: paths.dashboard.root, icon: ICONS.dashboard },
          { title: t('units'), path: paths.dashboard.two, icon: ICONS.ecommerce },
          { title: t('fts'), path: paths.dashboard.three, icon: ICONS.analytics },
          { title: t('tanks'), path: paths.dashboard.three, icon: ICONS.analytics },
          { title: t('fus'), path: paths.dashboard.three, icon: ICONS.analytics },
          { title: t('night_report'), path: paths.dashboard.three, icon: ICONS.analytics },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: t(''),
        items: [
          {
            title: t('sequence'),
            roles: ['admin', 'manager'],
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: t('units'), path: paths.dashboard.group.root },
              { title: t('fts'), path: paths.dashboard.group.five },
            ],
          },
          {
            title: t('search'),
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            roles: ['admin', 'manager'],
            children: [
              { title: t('operating_data'), path: paths.dashboard.group.root },
              { title: t('cars_data'), path: paths.dashboard.group.five },
            ],
          },
          {
            title: t('safety'),
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: t('topic'), path: paths.dashboard.group.root },
              { title: t('safe_work_procedure'), path: paths.dashboard.group.five },
              { title: t('task_risk_assessment'), path: paths.dashboard.group.six },
            ],
          },
          {
            title: t('forms'),
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: t('data_sheets'), path: paths.dashboard.group.root },
              { title: t('wcm'), path: paths.dashboard.group.five },
              { title: t('safety_forms'), path: paths.dashboard.group.six },
              {
                title: t('my_files'),
                path: paths.dashboard.group.six,
                disabled: true,
                caption: 'تم تعطيل هذه الميزة من الإدارة' /* roles: ['manager']*/,
              },
            ],
          },
          {
            title: t('control_panel'),
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: t('my_profile'), path: paths.dashboard.group.root },
              { title: t('my_group'), path: paths.dashboard.group.five },
              { title: t('operation_dev'), path: paths.dashboard.group.six },
              { title: t('web_site'), path: paths.dashboard.group.six /* roles: ['manager']*/ },
            ],
          },
        ],
      },

      {
        subheader: t('dcs_dashboard'),
        items: [
          { title: t('general_notes'), path: paths.dashboard.root, icon: ICONS.dashboard },
          { title: t('private_discation'), path: paths.dashboard.two, icon: ICONS.ecommerce },
          {
            title: t('أخرى'),
            path: paths.dashboard.three,
            icon: ICONS.analytics,
            disabled: true,
            caption: 'تم تعطيل هذه الميزة من الإدارة',
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
