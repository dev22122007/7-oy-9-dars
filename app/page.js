export default function Home() {
  return (
    <main className="px-40">
      <section class="align-element py-20">
        <div class="pt-2">
          <div class="border-b border-base-300 pb-5">
            <h2 class="text-3xl font-medium tracking-wider capitalize">
              Featured Products
            </h2>
          </div>
          <div class="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a
              class="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              href="/products/1"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
                  alt="avant-garde lamp"
                  class="rounded-xl h-64 md:h-48 w-full object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title capitalize tracking-wider">
                  Avant-Garde Lamp
                </h2>
                <span class="text-secondary">$179.99</span>
              </div>
            </a>
            <a
              class="card w-full  transition duration-300"
              href="/products/2"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                  alt="coffee table"
                  class="rounded-xl h-64 md:h-48 w-full object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title capitalize tracking-wider">
                  Comfy table
                </h2>
                <span class="text-secondary">$179.99</span>
              </div>
            </a>
            <a
              class="card w-full  transition duration-300"
              href="/products/3"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
                  alt="comfy bed"
                  class="rounded-xl h-64 md:h-48 w-full object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title ">Comfy Bed</h2>
                <span class="text-secondary">$129.99</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
