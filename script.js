
const main = document.getElementById('main')

const renderData = (data) => {
  console.time('nor')
  // const obj = {}
  // data.forEach(entry => {
  //   obj[entry.id] = 
  // })
  const normalizedData = data.reduce((accm, entry) => ({ ...accm, [entry.id]: { ...entry } }), {})
  console.log(normalizedData);

  const groupings = splitToGroups(data)

  Object.entries(groupings).forEach(([key, value]) => {
    const title = document.createElement('h1')
    title.innerText = key
    const p = document.createElement('p');
    p.innerText = value.slice(0, 100)
    main.append(title)
    main.append(p)
  })


}

const splitToGroups = data => {
  const matchingEmptyGroups = {}
  data.forEach(member => {
    Object.entries(member).forEach(([key, value]) => {
      if (!value) {
        matchingEmptyGroups[key] ?
          matchingEmptyGroups[key].push(member.id) :
          matchingEmptyGroups[key] = [member.id]
      }
    })
  })
  delete matchingEmptyGroups['id']
  return matchingEmptyGroups;
}

fetch('http://localhost:3000/data').then(res => res.json()).then(renderData)

