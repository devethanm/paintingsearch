/*
export default function Artwork({ image, footer1, footer2}) {
    return (
        <div className="flex flex-col justify-center text-center bg-white text-white pb-10 pt-10 shadow-lg flex-1"> 
            <div id="pictureContainer" className="bg-blue-500">
                <img
                    src={image}
                    alt={footer1 + footer2}
                />
            </div>
            <div id="footer" className="bg-red-800">
                <p>{footer1}</p>
                <p>{footer2}</p>
            </div>
        </div>
    )
}
*/

export default function Artwork({ image, footer1, footer2 }) {
    return (
        <div className="flex flex-col bg-black text-white shadow-lg">
            <div className="relative overflow-hidden w-full h-64 hover:opacity-80 hover:saturate-150">
                <img
                    src={image}
                    alt={footer1 + footer2}
                    className="absolute p-5 inset-0 w-full h-full object-cover drop-shadow-xl"
                />
            </div>
            <div className="p-4 bg-blue-900">
                <p className="text-sm text-white">{footer1}</p>
                <p className="text-sm text-white">{footer2}</p>
            </div>
        </div>
    );
}