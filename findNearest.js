// Good morning! Here's your coding interview problem for today.
// This problem was asked by LinkedIn.
// Given a list of points, a central point, and an integer k, find the nearest k points from the central point.
// For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2, return [(0, 0), (3, 1)].


function findNearest(center, points) {
    const nearest = {};
    for (const p of points) {
        const dist = 
            Math.sqrt(Math.pow(p[0] - center[0], 2) + Math.pow(p[1] - center[1], 2));

        if (!Object.keys(nearest).length) {
            nearest[dist] = [p];
        } else {
            const firstKey = Object.keys(nearest)[0];
            if (dist < parseFloat(firstKey)) {
                delete nearest[firstKey];
                nearest[dist] = [p];
            } else if (dist === parseFloat(firstKey)) {
                nearest[dist].push(p);
            }
        }
    }
    
    return nearest[Object.keys(nearest)[0]];
}

console.log(findNearest([1,2], [[5,4], [0,0], [3,1]]));

