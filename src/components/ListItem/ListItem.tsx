import * as React from 'react'

import { Link, ListItemComponent } from './ListItem.style'

export interface IProps {
  title: string;
  href: string;
}

const ListItem: React.FC<IProps> = ({ title, href }) => (
    <ListItemComponent>
      <Link href={ href }>{ title }</Link>
    </ListItemComponent>
)

export default ListItem
