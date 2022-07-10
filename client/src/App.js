import React from 'react'
import "./CSS/style.scss"
import { Navigate, Route, Routes } from "react-router-dom";
import ClientLayot from './Layout/ClientLayot';
import SalesHits from './Component/Main/salesHits/SalesHits';
import Bag from './Component/Bag/Bag';
import Like from './Component/Like/Like';
import CardItem from './Component/CardItem/CardItem';
import Page from './Component/Page/Page';
import Characteristics from './Component/CardItem/CardItemsDetails/Characteristics';
import Review from './Component/CardItem/CardItemsDetails/Review';
import Delivery from './Component/CardItem/CardItemsDetails/Delivery';
import NotFound from './Component/NotFound/NotFound';
import AdminLayout from "./Layout/AdminLayout"
import Lol from './Component/Page/Lol';
import Verification from './hoc/Verification';
import LogIn from './Admin/LogIn';
import UpdateItem from './Admin/UpdateItem';
import AddItem from './Admin/AddItem';
import RemoveItem from './Admin/RemoveItem';

export default function App() {
  console.log(process.env)
  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayot />}>
            <Route index element={<SalesHits />} />
            <Route path={process.env.REACT_APP_LINK_PULT}  element={<Page />}/>
            <Route path={process.env.REACT_APP_LINK_TVBOX}  element={<Page />}/>
            <Route path={process.env.REACT_APP_LINK_T2}  element={<Page />}/>
            <Route path={process.env.REACT_APP_LINK_TV}  element={<Page />}/>
            <Route path={process.env.REACT_APP_LINK_TVHOLDER}  element={<Page />}/>
            <Route path={`${process.env.REACT_APP_LINK_PULT}/:id`} element={<CardItem />}>
                <Route index element={<Characteristics />}/>
                <Route path={process.env.REACT_APP_LINK_REVIEWS} element={<Review />}/>
                <Route path={process.env.REACT_APP_LINK_DELIVERY} element={<Delivery />}/>
                <Route path="*" element={<Navigate to={process.env.REACT_APP_LINK_NOTFOUND} />} />
            </Route>
            <Route path={`${process.env.REACT_APP_LINK_TVBOX}/:id`} element={<CardItem />}>
                <Route index element={<Characteristics />}/>
                <Route path={process.env.REACT_APP_LINK_REVIEWS} element={<Review />}/>
                <Route path={process.env.REACT_APP_LINK_DELIVERY} element={<Delivery />}/>
                <Route path="*" element={<Navigate to={process.env.REACT_APP_LINK_NOTFOUND} />} />
            </Route>
            <Route path={`${process.env.REACT_APP_LINK_T2}/:id`} element={<CardItem />}>
                <Route index element={<Characteristics />}/>
                <Route path={process.env.REACT_APP_LINK_REVIEWS} element={<Review />}/>
                <Route path={process.env.REACT_APP_LINK_DELIVERY} element={<Delivery />}/>
                <Route path="*" element={<Navigate to={process.env.REACT_APP_LINK_NOTFOUND} />} />
            </Route>
            <Route path={`${process.env.REACT_APP_LINK_TV}/:id`} element={<CardItem />}>
                <Route index element={<Characteristics />}/>
                <Route path={process.env.REACT_APP_LINK_REVIEWS} element={<Review />}/>
                <Route path={process.env.REACT_APP_LINK_DELIVERY} element={<Delivery />}/>
                <Route path="*" element={<Navigate to={process.env.REACT_APP_LINK_NOTFOUND} />} />
            </Route>
            <Route path={`${process.env.REACT_APP_LINK_TVHOLDER}/:id`} element={<CardItem />}>
                <Route index element={<Characteristics />}/>
                <Route path={process.env.REACT_APP_LINK_REVIEWS} element={<Review />}/>
                <Route path={process.env.REACT_APP_LINK_DELIVERY} element={<Delivery />}/>
                <Route path="*" element={<Navigate to={process.env.REACT_APP_LINK_NOTFOUND} />} />
            </Route>
          
            <Route path='/bag' element={<Bag />} />
            <Route path='/like' element={<Like />} />

            <Route path='*' element={<NotFound />} />
        </Route>
            <Route path='/admin' element={<AdminLayout />}>
              <Route index element={
                <Verification>
                  <LogIn />
                </Verification>
              }/>
              <Route path='update' element={<UpdateItem />} />
              <Route path='add' element={<AddItem />} />
              <Route path='remove' element={<RemoveItem />} />
            </Route>
      </Routes>
      <Lol />
    </>
  )
}
