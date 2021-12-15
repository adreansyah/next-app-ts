import { Typography } from '@mui/material'
import useBreadCrumbs from 'hooks/useBreadCrumbs'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  const Crumbs = useBreadCrumbs({ customablepath: '/Home' })
  return (
    <>
      <Typography
        pl={1}
        variant="h4"
        noWrap
        component="span"
        fontWeight={600}
      >
        Home
      </Typography>
      {Crumbs}
    </>
  )
}

export default Home
