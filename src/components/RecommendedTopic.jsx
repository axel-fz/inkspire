import React from 'react'

const RecommendedTopic = () => {
    const trendingTopics = [
        { tag: "Technology", posts: 2847 },
        { tag: "Programming", posts: 2156 },
        { tag: "Design", posts: 1924 },
        { tag: "Business", posts: 1687 },
        { tag: "Self Improvement", posts: 1543 },
    ]
    return (
        <div className="flex flex-col">
            {trendingTopics.map((topic, index) => (
                <div className = "">

                    <Link key={topic.tag} href="#" className="block p-3 hover:bg-muted rounded-lg transition-colors group">
                        <div className="flex items-start gap-3">
                            <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground flex-shrink-0 w-5">
                                {index + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground group-hover:underline truncate">{topic.tag}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{topic.posts.toLocaleString()} stories</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
    )
}

export default RecommendedTopic
