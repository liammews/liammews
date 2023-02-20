import DynamicPostItem from "./PostsItem"



function DynamicPosts() {
    return (
        <div className="flex flex-col space-y-3">
            <DynamicPostItem title="Reading" description="What I've been reading" slug="reading" />

            <DynamicPostItem title="Watching" description="What I've been watching" slug="watching" />

            <DynamicPostItem title="My Software Stack" description="The software I use" slug="software" />

            <DynamicPostItem title="My Workspace" description="Where I do my work" slug="workspace" />
        </div>
    )
}

export default DynamicPosts