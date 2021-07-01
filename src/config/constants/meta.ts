import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MegaYields',
  description:
  'MegaYields',
  image: 'https://megayields.netlify.app/images/mega1.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MegaYields')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MegaYields')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MegaYields')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MegaYields')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MegaYields')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MegaYields')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MegaYields')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MegaYields')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MegaYields')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MegaYields')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MegaYields')}`,
      }
    default:
      return null
  }
}
