export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-12">
        Discipline & Mindset
      </h1>

      {/* Daily Reminder Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">Daily Reminder</h2>
        <p className="text-gray-700 text-lg">
          Stay consistent. Stay mentally strong. Build habits that last.
        </p>
      </section>

      {/* Motivational Quote Section */}
      <section className="bg-blue-100 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-800">Motivational Quote</h2>
        <p className="italic text-gray-800 text-lg">
          "Consistency beats motivation every time."
        </p>
      </section>

      {/* Tips & Exercises Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">Tips & Exercises</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
          <li>Plan your day the night before.</li>
          <li>Break big tasks into smaller steps.</li>
          <li>Track your habits daily.</li>
          <li>Reflect on wins every evening.</li>
        </ul>
      </section>

      {/* Footer / Call to Action */}
      <footer className="text-center text-gray-500 mt-12">
        Keep building your discipline. One day at a time.
      </footer>
    </main>
  )
}


