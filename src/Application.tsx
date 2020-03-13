import React, { FC } from 'react'
import { MenuList, MenuListItem } from './MenuList'
import { makeStyles } from '@material-ui/styles'
import PersonIcon from '@material-ui/icons/Person'

const useStyles = makeStyles({
  root: {}
})

export type ApplicationProps = {}
export const Application: FC<ApplicationProps> = () => {
  const styles = useStyles()

  return (
    <>
      <MenuList className={styles.root} heading="John Doe">
        <MenuListItem onClick={() => console.log('Profile clicked')}>
          Profile
        </MenuListItem>
        <MenuListItem onClick={() => console.log('Account clicked')}>
          Account
        </MenuListItem>
        <hr />
        <MenuListItem>
          <PersonIcon />
          My Profile
        </MenuListItem>
      </MenuList>
    </>
  )
}
