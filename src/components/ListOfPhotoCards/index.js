import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

import {photos} from '../../../api/db.json'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)}
    </List>
  )
}