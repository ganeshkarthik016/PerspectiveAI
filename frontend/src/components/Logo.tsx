export default function Logo() {

    return (

        <div className="flex items-center justify-center gap-5 py-8">

            <div
                className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500
                    flex
                    items-center
                    justify-center
                    text-white
                    text-4xl
                    shadow-xl
                "
            >
                📰
            </div>

            <div>

                <h1 className="text-5xl font-black text-slate-900">
                    NewsLens
                </h1>

                <p className="text-gray-500 text-lg">
                    Understand News from Every Perspective
                </p>

            </div>

        </div>

    );

}