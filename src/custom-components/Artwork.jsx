
export default function Artwork({ image, footer1, footer2}) {
    return (
        <div className="flex flex-col  justify-center text-center bg-white text-white pb-10 pt-10 shadow-lg w-1/3 flex-1"> 
            <div id="pictureContainer" className="flex-grow bg-blue-500">
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