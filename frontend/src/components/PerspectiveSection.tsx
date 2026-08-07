import type { Article } from "../types/article";

import ArticleCard from "./ArticleCard";

interface Props {

    title: string;

    articles: Article[];

}

export default function PerspectiveSection({

    title,

    articles,

}: Props) {

    if (articles.length === 0)
        return null;

    return (

        <section className="space-y-8">

            <div className="flex items-center gap-3">

                <div
                    className="
                        w-2
                        h-10
                        rounded-full
                        bg-blue-600
                    "
                />

                <h2
                    className="
                        text-3xl
                        font-bold
                    "
                >

                    {title}

                    <span
                        className="
                            ml-3
                            text-lg
                            text-gray-500
                            font-normal
                        "
                    >

                        ({articles.length})

                    </span>

                </h2>

            </div>

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-8
                "
            >

                {articles.map(article => (

                    <ArticleCard

                        key={article.url}

                        article={article}

                    />

                ))}

            </div>

        </section>

    );

}