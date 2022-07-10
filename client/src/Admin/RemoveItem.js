import React from 'react'
import useGetItemsFromServer from '../hook/useGetItemsFromServer';
import { useVerefication } from '../hook/useVerefication';
import AdminCard from './AdminCard';

export default function RemoveItem() {
    useVerefication();
    const [items, setItems] = useGetItemsFromServer(process.env.REACT_APP_URL_ALLITEMS)

    console.log(items)
  return (
    <div className="admin__RemoveItems">
        {items.map( item => <AdminCard key={item._id} item={item} />)}
    </div>
  )
}
