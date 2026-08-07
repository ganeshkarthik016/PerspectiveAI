type Props = {
    onClick: () => void;
};

export default function SearchButton({
    onClick
}: Props) {

    return (

        <button
            onClick={onClick}
            className="
            rounded-xl
            bg-blue-600
            px-8
            py-4
            text-white
            font-semibold
            hover:bg-blue-700
            transition
            "
        >
            Search
        </button>

    );

}