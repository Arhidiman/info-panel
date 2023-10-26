import { TFlight } from "@/app/types/types"

export const getPaginationArray = (totalItemsArray: TFlight[], totalItemsOnPage: number) => {
    const paginationArray: TFlight[][] = []
    let pagesCount =  0
    let itemsCount = 0

    for(let i = 0; i < totalItemsArray.length; i++) {

        if(!paginationArray[pagesCount]) {
            paginationArray.push([])
        }
        paginationArray[pagesCount].push(totalItemsArray[i])
        itemsCount +=1
        if(itemsCount === totalItemsOnPage) {
            pagesCount +=1
            itemsCount = 0
        }            
    }
    return paginationArray
}