const paginate = function (items, page, itemsPerPage) {
  
  const itemsOnPage = []
  let minPosition = page * itemsPerPage - itemsPerPage
  let to = page * itemsPerPage > items.length ? items.length : page * itemsPerPage
  for (let i = minPosition; i < to; i++) {
    itemsOnPage.push(items[i])
    console.log(items[i])
  }
  
  return {
    totalItems: items.length,
    itemsOnPage,
    page,
    itemsPerPage,
    from: minPosition + 1,
    to,
    prev: page > 1 ? true : false,
    next: to < 16 ? true : false,
  }
}

module.exports = paginate