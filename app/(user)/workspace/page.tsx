import WorkspaceText from '../../../components/workspace/WorkspaceText'
import Image from 'next/image';
import BackButton from "../../../components/backButton"
import SEO from '../../../components/global/SEO';


export default async function Workspace() {

    return (
        <div className='relative'> 
        <SEO title="Workspace" description="Where I do my work." link="/workspace" />
        <BackButton /> 

        <h1>
            My Workspace
        </h1> 

        <div className='w-full overflow-hidden h-[18em] md:h-[25em] rounded-lg bg-blue-200 my-12'>
            <Image
            className='object-cover h-[18em] md:h-[25em] mx-auto'
            src="/workspace.webp"
            alt="Image of workspace"
            width="768"
            height="1000" />
        </div>

        <article className='custom-prose prose-a:text-muted dark:prose-a:text-dark-muted'>
        <WorkspaceText />
        </article>
            
        </div>
    );
}
