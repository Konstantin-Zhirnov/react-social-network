import React, {useState} from "react";
import styles from "./Paginator.module.sass";
// import {cn} from "classname";


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {


    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    console.log("pagesCount:" + pagesCount)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.pangination}>
            { portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}


                {pages
                    .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map( p => {
                    return <span className={currentPage === p && styles.selectedPage}
                                 key={p}
                                 onClick={() => { onPageChanged(p) }}
                    >{p}</span>
                })}
            { portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
            }
         </div>
    )
}
export default Paginator