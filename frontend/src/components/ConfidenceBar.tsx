interface Props {

    confidence: number;

}

export default function ConfidenceBar({

    confidence,

}: Props) {

    return (

        <div className="mt-2">

            <div
                className="
                    w-full
                    h-2
                    bg-slate-200
                    rounded-full
                    overflow-hidden
                "
            >

                <div

                    className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-blue-500
                        to-cyan-500
                    "

                    style={{
                        width: `${confidence}%`,
                    }}

                />

            </div>

            <p
                className="
                    mt-1
                    text-xs
                    text-right
                    text-gray-500
                "
            >

                {confidence.toFixed(2)}%

            </p>

        </div>

    );

}