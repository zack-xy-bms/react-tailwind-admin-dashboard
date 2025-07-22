import { Helmet, HelmetProvider } from 'react-helmet-async'

function PageMeta({
  title,
  description,
}: {
  title: string
  description: string
}): React.ReactElement {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export function AppWrapper({ children }: { children: React.ReactNode }): React.ReactElement {
  return <HelmetProvider>{children}</HelmetProvider>
}

export default PageMeta
