export default function Modal({ open, onClose, children }) {
    return (
        <>
            <div onClick={onClose} className={`
                 fixed inset-0 z-50 flex justify-center items-center transition-colors
                 ${open ? "visible bg-black/20" : "invisible"}
                `}>

                {/*Modal */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`
                        bg-white rounded-xl shadow p-6 transition-all relative z-50
                        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                        `}>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-[20px] h-[20px] p-3 flex items-center justify-center border-[2px] border-gray-400 rounded-lg text-gray-400 text-2xl bg-white hover:bg-gray-50 hover:text-gray-600">
                        X
                    </button>

                    {children}
                </div>

            </div>
        </>
    )
}