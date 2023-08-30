"use client"

import { useState } from "react"

import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Adb } from "@mui/icons-material"

import styles from './page.module.css'

const pages = ['Products', 'Pricing', 'Blog']

export default function CollapsibleMenu() {
  const [anchorElNav, setAnchorElNav] =
    useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => setAnchorElNav(event.currentTarget)

  const handleCloseNavMenu = () => setAnchorElNav(null)

  const display = { xs: 'flex', md: 'none' }
  return (
    <>
      <Box sx={ { flexGrow: 1, display } }>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={ { vertical: 'bottom', horizontal: 'left' } }
          transformOrigin={ { vertical: 'top', horizontal: 'left' } }
          sx={ { display: { xs: 'block', md: 'none' } } }
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          keepMounted
        >
          {
            pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))
          }
        </Menu>
      </Box>
      <Adb sx={ { display, mr: 1 } } />
      <Typography
        variant="h5"
        component="a"
        className={styles.logo}
        sx={ { display, mr: 2, flexGrow: 1 } }
        href="/"
        noWrap
      >
        LOGO
      </Typography>
      <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
        {
          pages.map((page) => (
            <Button key={page} sx={ { my: 2 } } className={styles.appLink}>
              {page}
            </Button>
          ))
        }
      </Box>
    </>
  )
}
