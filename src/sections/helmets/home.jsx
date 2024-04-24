import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';
import { ProductListView } from '../product/view';

export default function HomeView() {
  const settings = useSettingsContext();

  return <ProductListView />;
}
