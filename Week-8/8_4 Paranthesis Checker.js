var isValid = function(s) {
    if (!(s.length % 2 === 0))
        return false

    let stack = []
    const pairObj = {
        "(": 1,
        ")": -1,
        "{": 2,
        "}": -2,
        "[": 3,
        "]": -3
    }
    for (let i = 0; i < s.length; i++) {
        if (pairObj[s[i]] > 0)
            stack.push(s[i])
        else if (pairObj[s[i]] < 0) {
            if (pairObj[s[i]] + pairObj[stack[stack.length - 1]] === 0) {
                stack.pop()
            } else
                return false

        }
    }
    if (stack.length)
        return false
    else
        return true
}