const html = items.results
  .map(function(item) {
    return `
  <div class="product">
          <img class="itemimg" src=${item.Images[0].url_fullxfull} />
          <p class="title">${item.title}</p>
          <p class="shopname">${item.Shop.shop_name}</p>
          <p class="price">$${item.price}</p>
          <img class="heart" src="./assets/heart.png">
        </div>
  `
  })
  .join("\n")

document.querySelector("#products").innerHTML = html
