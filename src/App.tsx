import { photographers } from './data';
import PhotographerCard from './components/PhotographerCard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          20 Fotógrafos Imprescindibles del Siglo XX
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographers.map((p) => (
            <PhotographerCard key={p.name} photographer={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
