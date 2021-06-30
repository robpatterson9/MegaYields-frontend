import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MegaYields',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://megayields.netlify.app/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MegaYields')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PancakeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PancakeSwap')}`,
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
        title: `${t('Initial Farm Offering')} | ${t('PancakeSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PancakeSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('PancakeSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MegaYields')}`,
      }
    default:
      return null
  }
}
