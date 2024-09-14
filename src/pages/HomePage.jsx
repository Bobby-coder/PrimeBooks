import CategoryCard from "@/components/home/CategoryCard";
import { categoryList } from "../utils/categories";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/*Hero section*/}
        <section className="bg-primary py-6 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            What should I read next ?
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl text-white">
            Here at PrimeBooks you can find your book of choice on Science
            fiction, Coding, Mystery, Historical Fiction and on many more
            Genres.
          </p>
        </section>

        {/*Featured Categories section*/}
        <section className="py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10">
          <div className="container mx-auto">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-md bg-muted px-3 py-1 text-sm">
                Featured Categories
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Discover Your Favorites
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Browse our selection of top-selling books categories.
              </p>
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4 mt-8">
              {categoryList.map(({ id, name, thumbnail }) => (
                <CategoryCard key={id} name={name} thumbnail={thumbnail} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
