

function WorkItem({ title, link, description }: { title: string; link: string; description: string }) {
  return (
    <div>
      <a href={`${link}`} className="no-underline">
        <div className="flex flex-row justify-between py-6 rounded-md md:p-4 hover:bg-foreground dark:hover:bg-dark-foreground">
          <div>
            <p className="text-text dark:text-dark-text">{title}</p>
            <p className="text-muted dark:text-dark-muted">{description}</p>
          </div>

          <div className="flex space-x-2">
            <div>
              <p className="text-muted dark:text-dark-muted">
                2023
              </p>
            </div>
          </div>

        </div>
      </a>
    </div>
  )
}

export default WorkItem
