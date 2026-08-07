interface Props {

    left: number;

    center: number;

    right: number;

}

export default function PerspectiveOverview({

    left,

    center,

    right,

}: Props) {

    return (

        <div
            className="
                flex
                flex-wrap
                justify-center
                gap-5
            "
        >

            <div
                className="
                    px-6
                    py-4
                    rounded-2xl
                    bg-blue-100
                    text-blue-700
                    font-semibold
                    shadow-sm
                "
            >

                🟦 Left ({left})

            </div>

            <div
                className="
                    px-6
                    py-4
                    rounded-2xl
                    bg-green-100
                    text-green-700
                    font-semibold
                    shadow-sm
                "
            >

                🟩 Center ({center})

            </div>

            <div
                className="
                    px-6
                    py-4
                    rounded-2xl
                    bg-red-100
                    text-red-700
                    font-semibold
                    shadow-sm
                "
            >

                🟥 Right ({right})

            </div>

        </div>

    );

}