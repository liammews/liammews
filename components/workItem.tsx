

function WorkItem({ title, link, description, date }: { title: string; link: string; date: string; description: string }) {
  return (
    <div>
      <a href={`${link}`} className="no-underline" target="_blank">
        <div className="flex flex-row justify-between py-6 rounded-md md:p-4 lg:dark:hover:bg-dark-foreground">
          <div>
            <p className="text-text dark:text-dark-text">{title}</p>
            <p className="text-muted dark:text-dark-muted">{description}</p>
          </div>

          <div className="flex space-x-2">
            <div>
              <p className="text-muted dark:text-dark-muted">
                {date}
              </p>
            </div>
          </div>

        </div>
      </a>
    </div>
  )
}

export default WorkItem
