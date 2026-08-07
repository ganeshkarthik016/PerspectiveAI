import { useState } from "react";

import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";
import PerspectiveOverview from "../components/PerspectiveOverview";
import PerspectiveSection from "../components/PerspectiveSection";

import { searchNews } from "../services/api";
import type { Article } from "../types/article";

export default function Home() {

    const [query, setQuery] = useState("");

    const [articles, setArticles] = useState<Article[]>([]);

    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {

        if (!query.trim()) return;

        setLoading(true);

        try {

            const data = await searchNews(query);

            console.log("Received:", data);

            setArticles(data);

        }

        catch (error) {

            console.error(error);

            alert("Failed to fetch articles.");

        }

        finally {

            setLoading(false);

        }

    };

    const leftArticles = articles.filter(
        article => article.bias.label === "Left"
    );

    const centerArticles = articles.filter(
        article => article.bias.label === "Center"
    );

    const rightArticles = articles.filter(
        article => article.bias.label === "Right"
    );

    return (

        <main
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-50
                via-blue-50
                to-cyan-50
                px-6
                py-10
            "
        >

            <div className="max-w-7xl mx-auto space-y-10">

                <Logo />

                <div className="flex gap-4">

                    <SearchBar
                        value={query}
                        onChange={setQuery}
                    />

                    <SearchButton
                        onClick={handleSearch}
                    />

                </div>

                {loading && (
                    <LoadingSpinner />
                )}

                {!loading && articles.length === 0 && (
                    <EmptyState />
                )}

                {!loading && articles.length > 0 && (

                    <>

                        <div className="text-gray-600 text-lg font-medium">

                            Showing{" "}

                            <span className="font-bold">

                                {articles.length}

                            </span>{" "}

                            Articles

                        </div>

                        <PerspectiveOverview
                            left={leftArticles.length}
                            center={centerArticles.length}
                            right={rightArticles.length}
                        />

                        <PerspectiveSection
                            title="Left Perspective"
                            articles={leftArticles}
                        />

                        <PerspectiveSection
                            title="Center Perspective"
                            articles={centerArticles}
                        />

                        <PerspectiveSection
                            title="Right Perspective"
                            articles={rightArticles}
                        />

                    </>

                )}

            </div>

        </main>

    );

}