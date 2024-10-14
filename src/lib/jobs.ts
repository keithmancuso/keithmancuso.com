import glob from 'fast-glob'

interface Job {
  title: string
  company: string
  startYear: number
  endYear: number
}
export interface JobWithSlug extends Job {
    slug: string
}

async function importJob(
  jobFilename: string,
): Promise<JobWithSlug> {
  let { job } = (await import(`../app/jobs/${jobFilename}`)) as {
    default: React.ComponentType
    job: Job
  }

  return {
    slug: jobFilename.replace(/(\/page)?\.mdx$/, ''),
    ...job,
  }
}

export async function getAllJobs() {
  let jobFilenames = await glob('*/page.mdx', {
    cwd: './src/app/jobs',
  })

  let jobs = await Promise.all(jobFilenames.map(importJob))

  return jobs.sort((a, z) => a.startYear - z.startYear)
}
