loadItems();

async function loadItems() {
    
    let res = await fetch(" https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
            <div class="col-lg-4">
              <img src=${element.flags.png} alt="">
              <h2 class="fw-normal">${element.name.common}</h2>
              <p>${element.name.official}</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div><!-- /.col-lg-4 -->
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}