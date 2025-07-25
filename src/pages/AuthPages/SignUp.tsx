import SignUpForm from '@/components/auth/SignUpForm'
import PageMeta from '@/components/common/PageMeta'
import AuthLayout from './AuthPageLayout'

export default function SignUp(): React.ReactElement {
  return (
    <>
      <PageMeta
        title="React.js SignUp Dashboard"
        description="This is React.js SignUp Tables Dashboard page for @zack-xy"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  )
}
