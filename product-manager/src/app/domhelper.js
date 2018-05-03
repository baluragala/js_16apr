export function renderTable(data) {
  let tableHeader = `
    <tr class="table-header">
        <td>ID</td>
        <td>Name</td>
        <td>Price</td>
        <td>Stock</td>
        <td>ACTIONS</td>
    </tr>
    `;
  let rows = data.map(
    item => `
    <tr class="table-row" id="item_${item.id}">
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.stock}</td>
        <td>
        <button id="edit_${item.id}" data-id="${item.id}">EDIT</button>
        &nbsp;
        <button id="delete_${item.id}" data-id="${item.id}">DELETE</button>
        </td>
    </tr>
    `
  );
  let rowsMerged = rows.join("");
  return `
  <table>
    ${tableHeader}
    ${rowsMerged}
  </table>
  `;
}

export function getForm() {
  return `
    <fieldset  style="width:80%;margin:0 auto;padding:5xp">
        <form id="product-form">
            <legend>Manage Product</legend>
            <input type="text" placeholder="Product Name" name="pname"/>
            <input type="text" placeholder="Product Desc" name="pdesc"/>
            <input type="number" placeholder="Product Price" name="pprice"/>
            <input type="number" placeholder="Product Stock" name="pstock"/>
            <input type="submit" value="save"/>
        </form>
    </fieldset>
    `;
}
