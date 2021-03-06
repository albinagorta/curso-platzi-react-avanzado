import React from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

import {categories} from '../../../api/db.json'

export const ListOfCategories = () => {
  console.log(categories);
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
      }
    </List>
  )
}