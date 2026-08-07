export default function LoadingSpinner() {

    return (

        <div className="flex justify-center py-20">

            <div
                className="
                    w-14
                    h-14
                    border-4
                    border-blue-200
                    border-t-blue-600
                    rounded-full
                    animate-spin
                "
            />

        </div>

    );

}