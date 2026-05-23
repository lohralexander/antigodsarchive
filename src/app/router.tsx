import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { HistoryPage } from '@/pages/HistoryPage';
import { PeoplePage } from '@/pages/PeoplePage';
import { SolarSystemPage } from '@/pages/SolarSystemPage';
import { TechnologyPage } from '@/pages/TechnologyPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<SolarSystemPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
