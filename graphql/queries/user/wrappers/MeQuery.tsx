import * as React from 'react'

import UserAccount from '@components/UI/User/account/UserAccount'
import { queries } from '../../../index'
import MeQueryWrapper from './MeWrapper'

export interface IMeQueryProps {
  id: string
}

class MeQuery extends React.PureComponent<IMeQueryProps> {
  public render() {
    const { id } = this.props

    return (
      <>
        <MeQueryWrapper
          fetchPolicy="cache-first"
          notifyOnNetworkStatusChange={true}
          query={queries.me}
          variables={{
            id
          }}>
          {(client) => {
            const { loading, /*  error, */ data } = client

            /* if (error) return `Error! ${error.message}` */

            /* if (loading) return 'Loading...' */

            if (data && data.me && !loading) {
              const { me } = data

              return <UserAccount user={me} />
            }

            return null
          }}
        </MeQueryWrapper>
      </>
    )
  }
}

export default MeQuery
