import React from "react";

function Product2() {
  return (
    <section className="align-element py-20 px-40">
      <section>
        <div className="text-md breadcrumbs">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>
        </div>
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          <img
            src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
            alt="avant-garde lamp"
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
          <div>
            <h1 className="capitalize text-3xl font-bold">Comfy Table</h1>
            <h4 className="text-xl text-neutral-content font-bold mt-2">Modenza</h4>
            <p className="mt-3 text-xl">$179.99</p>
            <p className="mt-6 leading-8">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse a aut, maxime quo consequuntur vel ratione dolorem unde? Eaque sint illo, atque voluptas reiciendis deserunt magni rem ut cumque qui odio rerum minus asperiores ducimus in ea? Eos, hic laboriosam.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Product2;
