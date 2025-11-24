export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center">
          Landing Templates
        </h1>
        <p className="text-center mt-4 text-gray-600">
          Choose a template to preview:
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <a 
            href="/saas" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            SaaS Template
          </a>
        </div>
      </div>
    </main>
  );
}
