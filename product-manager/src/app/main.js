import ProductService from "./Product.Service.js";
import $ from "jquery";
import { renderTable, getForm } from "./domhelper.js";

const service = new ProductService();

$(function() {
  const conatiner = $("#root");
  conatiner
    .append("<h1>Product Manager</h1>")
    .css("text-align", "center")
    .css("color", "purple");

  conatiner.append(getForm());

  $("form").submit(function(e) {
    e.preventDefault();
    let name = $("input[name=pname]").val();
    let desc = $("input[name=pdesc]").val();
    let price = $("input[name=pprice]").val();
    let stock = $("input[name=pstock]").val();
    //console.log(name, pdesc, pprice, pstock);
    service.saveProduct({ name, desc, price, stock }).then(response => {
      if (response.status == 201) {
        alert("Product Saved Successfully");
        $("input[name]").val("");
        $("table").remove();
        service.getProducts().then(products => {
          let tableHtml = renderTable(products);
          conatiner.append(tableHtml);
        });
      }
    });
    return false;
  });

  service.getProducts().then(products => {
    let tableHtml = renderTable(products);
    conatiner.append(tableHtml);

    $("[id^='delete']").click(function(e) {
      let id = e.target.dataset.id;
      service.deleteProduct(id).then(response => {
        alert("Product Removed");
      });
    });

    $("[id^='edit']").click(function(e) {
      let id = e.target.dataset.id;
      if ($(this).text() == "EDIT") {
        $(this).text("SAVE");
        $.each($(`#item_${id}`).children(), function(index, ele) {
          switch (index) {
            case 1:
              var value = $(ele).text();
              $(ele).html(`<input type="text" value="${value}"/>`);
              break;
            case 2:
            case 3:
              var value = $(ele).text();
              $(ele).html(`<input type="number" value="${value}"/>`);
              break;
          }
        });
      } else {
        let inputs = $(`#item_${id}`)
          .children()
          .children()
          .filter("input");
        let name = $(inputs[0]).val();
        let price = $(inputs[1]).val();
        let stock = $(inputs[2]).val();
        console.log({ name, price, stock });
        service.updateProduct(id, { name, price, stock }).then(response => {
          alert("Product Saved Successfully");
        });
      }
    });
  });
});
