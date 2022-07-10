import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import HeaderBottom from '../Component/Header/HeaderBottom'
import HeaderNavigate from '../Component/Header/HeaderNavigate'
import { HeaderTop } from '../Component/Header/HeaderTop'
import BagContextAndLike from '../hoc/BagContextAndLike'

export default function ClientLayot() {
  return (
    <>
     <BagContextAndLike>
        <header>
            <HeaderTop />
            <HeaderBottom />
            <hr />
            <HeaderNavigate />
            <hr />
        </header>
        <main>
            <Outlet />

        </main>
        <footer>
           <hr />
           <Footer />
        </footer>
     </BagContextAndLike>
    </>   
  )
}
