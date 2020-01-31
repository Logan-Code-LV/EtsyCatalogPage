const html = items.results
  .map(function(item) {
    return `
  <div class="product">
          <img src="https://placehold.it/175" />
          <p class="title">${item.title}</p>
          <p class="price">${item.price}</p>
        </div>
  `
  })
  .join("\n")

document.querySelector("#products").innerHTML = html
