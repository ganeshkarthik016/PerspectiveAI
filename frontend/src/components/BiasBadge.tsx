interface Props {

    bias: string;

}

export default function BiasBadge({

    bias,

}: Props) {

    const styles = {

        Left: "bg-blue-100 text-blue-700",

        Center: "bg-green-100 text-green-700",

        Right: "bg-red-100 text-red-700",

    };

    return (

        <span

            className={`
                inline-block
                px-3
                py-1
                rounded-full
                font-semibold
                text-sm
                ${styles[bias as keyof typeof styles]}
            `}

        >

            {bias}

        </span>

    );

}