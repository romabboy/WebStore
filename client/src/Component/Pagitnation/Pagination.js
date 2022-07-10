import React from 'react'

export default function Pagination({countItems, itemsOnPage, changePage}) {
    const arr = [];

    for(let i = 0; i < Math.ceil(countItems/itemsOnPage); i++){
        arr.push(i+1);
    }

    return (
    <div className="pagination">

        <ul className="pagination__list">
            {
                arr.map( number => (<li className='pagination__link' onClick={e => changePage(number)}>
                    {number}
                </li>))
            }
        </ul>

    </div>
    )
}
