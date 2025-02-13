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
  HouseBathRoom
} from '../../../../assets/photos'
import { TFunction } from 'i18next'
import { CASADANA_KEYS } from '../../../../i18n/keys/CASADANA_KEYS.ts'

export const rooms = (
  t: TFunction
): { id: string; name: string; images: string[] }[] => [
  {
    id: 'living-room',
    name: 'Living room',
    images: [HouseLivingRoom1, HouseLivingRoom2, HouseLivingRoom3]
  },
  {
    id: 'kitchenette',
    name: 'Kitchenette',
    images: [HouseKitchen1, HouseKitchen2]
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    images: [HouseBedRoom1, HouseBedRoom2, HouseBedRoom3]
  },
  {
    id: 'bedroom2',
    name: 'Bedroom 2',
    images: [HouseBedRoom1_1]
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    images: [HouseBathRoom]
  },
  {
    id: 'exterior',
    name: 'Exterior',
    images: [HouseFront1, HouseFront2, HouseFront3]
  },
  {
    id: 'jacuzzi',
    name: t(CASADANA_KEYS.listing.jacuzzi),
    images: [HouseJacuzzi1, HouseJacuzzi2]
  },
  {
    id: 'rooftop',
    name: 'Rooftop',
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
