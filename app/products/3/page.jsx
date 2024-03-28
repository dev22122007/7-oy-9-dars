import React from "react";

function Product3() {
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
            src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
            alt="avant-garde lamp"
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
          <div>
            <h1 className="capitalize text-3xl font-bold">Comfy Bed</h1>
            <h4 className="text-xl text-neutral-content font-bold mt-2">Modenza</h4>
            <p className="mt-3 text-xl">$179.99</p>
            <p className="mt-6 leading-8">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo at et expedita facilis sint consectetur minima tempore, aperiam doloribus, vero eaque nostrum. Veritatis quas quo cumque provident, ab aspernatur. Vel sit dolor enim? Eius ut itaque officia vitae odio.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Product3;
