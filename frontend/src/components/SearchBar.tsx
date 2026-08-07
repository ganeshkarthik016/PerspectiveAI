type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function SearchBar({
    value,
    onChange
}: Props) {

    return (

        <input
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-5
            py-4
            text-lg
            outline-none
            focus:border-blue-500
            "
            placeholder="Search any topic..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />

    );

}