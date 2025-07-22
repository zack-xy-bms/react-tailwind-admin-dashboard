import SignUpForm from '../../components/auth/SignUpForm'
import PageMeta from '../../components/common/PageMeta'
import AuthLayout from './AuthPageLayout'

export default function SignUp(): React.ReactElement {
  return (
    <>
      <PageMeta
        title="React.js SignUp Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js SignUp Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  )
}
