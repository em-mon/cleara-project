export default function Header() {
    return <div className="relative bg-[url('./images/background.png')] bg-cover bg-center h-screen">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex">
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <p className="text-fuchsia-900 mb-4 text-center mb-15 text-4xl w-1/2">
                        Enter in the products in your skincare routine and see if any two
                        shouldn't go together.
                    </p>
                    <button className="bg-white text-fuchsia-900">Get your results now!</button>
                </div>

        </div>
}