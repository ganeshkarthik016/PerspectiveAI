interface Props {

    stance: string;

}

export default function StanceBadge({

    stance,

}: Props) {

    return (

        <span
            className="
                inline-block
                px-3
                py-1
                rounded-full
                bg-slate-100
                text-slate-700
                font-semibold
                text-sm
            "
        >

            {stance}

        </span>

    );

}