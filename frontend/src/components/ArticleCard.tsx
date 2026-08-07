import type { Article } from "../types/article";

import BiasBadge from "./BiasBadge";
import StanceBadge from "./StanceBadge";
import ConfidenceBar from "./ConfidenceBar";

interface Props {
    article: Article;
}

export default function ArticleCard({ article }: Props) {

    return (

        <div
            className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
            "
        >

            {article.image && (

                <img
                    src={article.image}
                    alt={article.title}
                    className="
                        w-full
                        h-60
                        object-cover
                    "
                />

            )}

            <div className="p-6">

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-slate-900
                    "
                >
                    {article.title}
                </h2>

                <p
                    className="
                        mt-4
                        text-gray-600
                        leading-7
                    "
                >
                    {article.summary}
                </p>

                <div className="mt-6 space-y-5">

                    <div>

                        <BiasBadge bias={article.bias.label} />

                        <ConfidenceBar
                            confidence={article.bias.confidence}
                        />

                    </div>


                </div>

                <div
                    className="
                        mt-8
                        flex
                        justify-between
                        items-center
                        text-sm
                        text-gray-500
                    "
                >

                    <div>

                        <div className="font-semibold">

                            {article.source}

                        </div>

                        <div>

                            {new Date(
                                article.published
                            ).toLocaleDateString()}

                        </div>

                    </div>

                    <a

                        href={article.url}

                        target="_blank"

                        rel="noreferrer"

                        className="
                            text-blue-600
                            font-semibold
                            hover:underline
                        "

                    >
                        Read →

                    </a>

                </div>

            </div>

        </div>

    );

}