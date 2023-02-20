import WorkspaceText from '../../../components/workspace/WorkspaceText'
import Image from 'next/image';
import BackButton from "../../../components/backButton"


export default async function Workspace() {

    return (
        <div className='relative'> 
        <BackButton /> 

        <h1>
            My Workspace
        </h1> 

        <div className='w-full overflow-hidden h-[18em] md:h-[25em] rounded-lg bg-blue-200 my-12'>
            <Image
            className='object-cover h-[18em] md:h-[25em] mx-auto'
            src="/light-mode.jpg"
            alt="Image of workspace"
            width="2200"
            height="2200" />
        </div>

        <article className='custom-prose prose-a:text-muted dark:prose-a:text-dark-muted'>
        <WorkspaceText />
        </article>
            
        </div>
    );
}
