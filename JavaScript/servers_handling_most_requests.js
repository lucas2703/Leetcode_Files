// first set - DONE
/*var k = 3; // k servers numbered from 0 to k-1, cannot handle more than one request at a time
var arrival = [1,2,3,4,5]; 
var load = [5,2,3,3,3];*/

var k = 3
var arrival = [1,2,3,4]
var load = [2,6,7,8]

/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function(k, arrival, load) {
    // create list of lists, column for each server with 3 rows for arrival, load and no. of tasks done
    var _servers = new Array(k);
    // create 3 x k matrix
    for (let i = 0; i < k; i++)
    {
        _servers[i] = new Array(3);
    }

    // traversing through time, one 'i' is one time period
    for (let i = 0; i < arrival.length; i++)
    {
        // traverse through servers to find if it's busy
        for (let j = 0; j < k; j++)
        {
            // if load is equal to i, then it has expired
            if (_servers[j][1] == i)
            {
                //console.log(_servers);
                //console.log("match when i: ", i);
                _servers[j][0] = null;
                _servers[j][1] = null;
            }

            // add info into _servers 2d-arry
            if (_servers[j][0] == null)
            {
                _servers[j][0] = arrival[i];
                _servers[j][1] = i + load[i];
                if (_servers[j][2] == null)
                {
                    _servers[j][2] = 1;
                    break;
                }
                else
                {
                    _servers[j][2] += 1;
                    break;
                }
            }
        }
    }

    // find most active server
    var activity_count = 0;
    var result = [];
    var temp_higher = [];
    for (let i = 0; i < k; i++)
    {
        if (_servers[i][2] > activity_count)
        {
            activity_count = _servers[i][2]
            temp_higher = [];
            temp_higher.push(i);
        }
        else if (_servers[i][2] == activity_count)
        {
            {
                temp_higher.push(i);
            }
        }
    }

    result.push.apply(result, temp_higher);

    return result;
};
//busiestServers(k, arrival, load)
console.log(busiestServers(k, arrival, load));