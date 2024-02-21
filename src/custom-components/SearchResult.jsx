export default function SearchResult({ value, desc }) {
    return (
        <div className="flex flex-col bg-black text-white shadow-lg ring-1 overflow-x-hidden hover:bg-slate-600 w-96 p-2 max-h-20">
            <h1 className="text-md font-bold">{value}</h1>
            <h1 className="text-sm">{desc}</h1>
        </div>
    );
}