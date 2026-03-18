import { Photographer } from '../data';

interface Props {
  photographer: Photographer;
  key?: string;
}

export default function PhotographerCard({ photographer }: Props) {
  const seed = photographer.name.replace(/\s+/g, '-').toLowerCase();
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={`https://picsum.photos/seed/${seed}/400/300`}
        alt={photographer.name}
        className="w-full h-48 object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{photographer.name}</h3>
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">{photographer.category}</p>
        <p className="text-gray-700 mb-4">{photographer.description}</p>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Estilo técnico y estético:</p>
          <p className="text-sm text-gray-800">{photographer.style}</p>
        </div>
      </div>
    </div>
  );
}
