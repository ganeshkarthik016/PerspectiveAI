interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function SearchBar({

    value,

    onChange,

}: Props) {

    return (

        <input

            type="text"

            placeholder="Search any topic..."

            value={value}

            onChange={(e) => onChange(e.target.value)}

            onKeyDown={(e) => {

                if (e.key === "Enter") {

                    (document.getElementById("search-btn") as HTMLButtonElement)?.click();

                }

            }}

            className="
                flex-1
                rounded-2xl
                border
                border-slate-300
                px-6
                py-4
                text-lg
                bg-white
                shadow-sm
                focus:outline-none
                focus:ring-4
                focus:ring-cyan-200
            "

        />

    );

}