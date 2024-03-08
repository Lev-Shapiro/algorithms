import { Element } from "./algo.types";

/**
 * Search at which depth will the value "true" be found
 * @param arr array to search in
 * @param depth current depth, should not be passed (used by the recursive function)
 * @returns depth at which was found
 */
export const qSearch = (arr: Element[], depth = 1): number => {
    const allConnections = [];

    for (var i = 0; i < arr.length; i++) {
        const { value, connections } = arr[i];

        if (value === true) return depth;    

        if(connections) allConnections.push(...connections);
    }

    if(!allConnections.length) return -1;
    
    return qSearch(allConnections, depth + 1);
};