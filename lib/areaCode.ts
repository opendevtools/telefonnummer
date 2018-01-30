import { findMatchingAreaName } from './riktnummer'

const areaCode = (area: string): string => {
  return area ? findMatchingAreaName(area) : ''
}

export default areaCode
