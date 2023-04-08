import { Element } from "./algo.types";

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