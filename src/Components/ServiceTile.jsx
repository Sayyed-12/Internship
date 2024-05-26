function ServiceTile({ title, image, description }) {

    const showAlert = (msg) => {
        alert(msg)
    }

    return <>
        <div className="max-w-78   rounded-xl text-center transition-all p-8 m-4 my-8 items-center">
            <div className="w-12 h-12 bg-white shadow-md mx-auto p-4  opacity-90 rounded-full item-center">
                <img src={image} className="w-full h-full object-cover rounded-full" alt={title} />
            </div>

            <div className="font-bold text-2xl p-3" onClick={() => { showAlert(title) }}>{title}</div>

            <div className="text-gray-500">
                {description}
            </div>
        </div>
    </>
}

export default ServiceTile;
