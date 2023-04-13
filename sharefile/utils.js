const html = (strings, ...keys) => {
    const result = [strings[0]]
    keys.forEach((k, i) => {
      result.push(k)
      result.push(strings[i + 1])
    })
    return result.join("")
  }
  
  export {
    html
  }