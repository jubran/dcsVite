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
        subheader: 'البوابة الالكترونية',
        items: [
          { title: t('dashboard'), path: paths.dashboard.root, icon: ICONS.dashboard },
          { title: t('ft'), path: paths.dashboard.two, icon: ICONS.ecommerce },
          { title: t('tanks'), path: paths.dashboard.three, icon: ICONS.analytics },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'لوحة التحكم ',
        items: [
          {
            title: 'ملفي الشخصي',
            roles: ['admin', 'manager'],
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: 'نظرة عامة', path: paths.dashboard.group.root },
              { title: 'تحديث', path: paths.dashboard.group.five },
            ],
          },
          {
            title: 'مجموعتي',
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            roles: ['manager'],
            children: [
              { title: 'الأعضاء', path: paths.dashboard.group.root },
              { title: 'العضويات', path: paths.dashboard.group.five },
              { title: 'جديد', path: paths.dashboard.group.six },
            ],
          },
          {
            title: 'إدارة التشغيل',
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: 'الأعضاء', path: paths.dashboard.group.root },
              { title: 'العضويات', path: paths.dashboard.group.five },
              { title: 'جديد', path: paths.dashboard.group.six },
            ],
          },
          {
            title: 'إدارة البوابة',
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: 'الأعضاء', path: paths.dashboard.group.root },
              { title: 'العضويات', path: paths.dashboard.group.five },
              { title: 'جديد', path: paths.dashboard.group.six },
            ],
          },
        ],
      },

      {
        subheader: 'خدمات البوابة',
        items: [
          { title: 'الملفات', path: paths.dashboard.root, icon: ICONS.dashboard },
          { title: 'النماذج', path: paths.dashboard.two, icon: ICONS.ecommerce },
          {
            title: 'أخرى',
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
