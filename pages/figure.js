import { withRouter } from 'next/router';
import { App as AppLayout } from '../components/layouts';

const Page = withRouter(props => {
  console.log(props)
  return (
    <AppLayout>
      <h1>{props.router.query.name}</h1>
      <p>This is the blog post content.</p>
    </AppLayout>
  )
});

export default Page;