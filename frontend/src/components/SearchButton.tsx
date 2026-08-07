interface Props {

    onClick: () => void;

}

export default function SearchButton({

    onClick,

}: Props) {

    return (

        <button

            id="search-btn"

            onClick={onClick}

            className="
                px-8
                rounded-2xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                shadow-lg
                transition
            "

        >

            Analyze

        </button>

    );

}