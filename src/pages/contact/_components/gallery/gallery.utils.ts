import {
  HouseFront1,
  HouseFront2,
  HouseFront3,
  HouseBedRoom1,
  HouseBedRoom2,
  HouseBedRoom3,
  HouseBedRoom1_1,
  HouseJacuzzi1,
  HouseJacuzzi2,
  HouseKitchen1,
  HouseKitchen2,
  HouseLivingRoom1,
  HouseLivingRoom2,
  HouseLivingRoom3,
  HouseRoofTop1,
  HouseRoofTop2,
  HouseRoofTop3,
  HouseRoofTop4,
  HouseRoofTop5,
  HouseRoofTop6,
  HouseBathRoom,
  HouseBedRoom1_2,
  HouseBedRoom1_3,
  HouseLivingRoom4
} from '../../../../assets/photos'
import { TFunction } from 'i18next'
import { CASADANA_KEYS } from '../../../../i18n/keys/CASADANA_KEYS.ts'

export const rooms = (
  t: TFunction
): { id: string; name: string; images: string[] }[] => [
  {
    id: 'living-room',
    name: t(CASADANA_KEYS.house.living_room),
    images: [
      HouseLivingRoom1,
      HouseLivingRoom2,
      HouseLivingRoom3,
      HouseLivingRoom4
    ]
  },
  {
    id: 'kitchen',
    name: t(CASADANA_KEYS.house.kitchen),
    images: [HouseKitchen1, HouseKitchen2]
  },
  {
    id: 'bedroom',
    name: t(CASADANA_KEYS.house.bedroom.first),
    images: [HouseBedRoom1, HouseBedRoom2, HouseBedRoom3]
  },
  {
    id: 'bedroom2',
    name: t(CASADANA_KEYS.house.bedroom.second),
    images: [HouseBedRoom1_1, HouseBedRoom1_2, HouseBedRoom1_3]
  },
  {
    id: 'bathroom',
    name: t(CASADANA_KEYS.house.bathroom),
    images: [HouseBathRoom]
  },
  {
    id: 'exterior',
    name: t(CASADANA_KEYS.house.exterior),
    images: [HouseFront1, HouseFront2, HouseFront3]
  },
  {
    id: 'jacuzzi',
    name: t(CASADANA_KEYS.listing.jacuzzi),
    images: [HouseJacuzzi1, HouseJacuzzi2]
  },
  {
    id: 'rooftop',
    name: t(CASADANA_KEYS.house.rooftop),
    images: [
      HouseRoofTop1,
      HouseRoofTop2,
      HouseRoofTop3,
      HouseRoofTop4,
      HouseRoofTop5,
      HouseRoofTop6
    ]
  }
]
