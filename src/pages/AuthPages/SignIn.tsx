import SignInForm from '../../components/auth/SignInForm'
import PageMeta from '../../components/common/PageMeta'
import AuthLayout from './AuthPageLayout'

export default function SignIn(): React.ReactElement {
  return (
    <>
      <PageMeta
        title="React.js SignIn Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js SignIn Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  )
}
