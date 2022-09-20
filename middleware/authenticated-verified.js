export default function({ redirect, store }) {
  const isVerified = store.state.auth.verified
  if (!isVerified) {
    redirect({ name: 'admin-verification' })
  }
}
