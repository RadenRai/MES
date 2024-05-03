import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))// Pastikan file ini ada
const Mesin = lazy(() => import('../pages/protected/Mesin'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const Produksi = lazy(() => import('../pages/protected/Produksi'));

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/welcome',
    component: Welcome,
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/mesin',
    component: Mesin,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/produksi',
    component: Produksi,
  },
]

export default routes
