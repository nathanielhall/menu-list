import React, {
  useEffect,
  FC,
  ReactNode,
  useState,
  KeyboardEvent,
  MouseEvent,
  useRef,
  createContext,
  useContext
} from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MuiMenuList from '@material-ui/core/MenuList'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

type MenuContextType = {
  onClose: (event: MouseEvent<EventTarget>) => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex'
    }
  })
)

export type MenuListProps = {
  children: ReactNode
  heading: string
  className?: string
}

export const MenuList: FC<MenuListProps> = ({
  children,
  heading,
  className
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div className={`${classes.root} ${className}`}>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        color="primary"
        onClick={handleToggle}
      >
        {heading}
        <ArrowDropDownIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MuiMenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuContext.Provider value={{ onClose: handleClose }}>
                    {children}
                  </MenuContext.Provider>
                </MuiMenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export const useMenu: () => MenuContextType = () => {
  const context = useContext<MenuContextType | undefined>(MenuContext)
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider')
  }

  return context
}
