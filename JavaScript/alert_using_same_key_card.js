/* LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when 
it was used. The system emits an alert if any worker uses the key-card three or more times in a one-hour period.

You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person's name and the time when their key-card was used in a single day.

Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.

Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "22:51" - "23:52" is not considered to be within a one-hour period. */

/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */

var keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"];
var keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"];
var entry_log= [];
var frequent_use = [];

var alertNames = function(keyName, keyTime) {
    entry_log = [];
    frequent_use = [];
    for (let i = 0; i < keyName.length; i++)
    {
        let item = {};
        let time_temp = keyTime[i].split(':');
        let hours_temp = parseInt(time_temp[0]) * 60;
        let overall_time = hours_temp + parseInt(time_temp[1]);
        item[keyName[i]] = overall_time;
        entry_log.push(item);

        if (keyName.length > 2)
        {
            if (keyName[i - 1] == keyName[i])
            {
                let first_test = entry_log[i - 1][keyName[i - 1]];
                if (keyName[i - 2] == keyName[i] && first_test - overall_time <= 60)
                {
                    let second_test = entry_log[i - 2][keyName[i - 2]];
                    //console.log(entry_log[i][keyName[i - 2]]);
                    //console.log(second_test - overall_time)
                    if (Math.abs(second_test - overall_time) <= 60)
                    {
                        frequent_use.push(keyName[i]);
                    }
                }
            }
        }
    } 

    return frequent_use.sort;
};
alertNames(keyName, keyTime);
console.log(frequent_use);